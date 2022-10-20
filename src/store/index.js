import auth from "@/consumers/auth"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cpf: "",
      cellphone: ""
    }
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN (state, payload) {
      state.login = payload
    },
    UPDATE_USER (state, payload) {
      state.user = Object.assign(state.user, payload)
    }
  },
  actions: {
    getUser (context) {
      return auth.get(context).then(res => {
        context.commit("UPDATE_USER", res.data);
        context.commit("UPDATE_LOGIN", true);
      })
    },
    createUser (context, payload) {
      console.log(payload, context);
      context.commit("UPDATE_USER", { id: payload.email });
      return auth.signup(payload)
    },
    loginUser (context, payload) {
      return auth.signin({
        name: payload.name,
        password: payload.password
      }).then(res => {
        window.localStorage.token = `Bearer ${res.data.token}`
        console.log(res)
      })
    },
    logOut (context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        cpf: "",
        phone: "",
        password: ""
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {}
})
