import auth from "@/consumers/auth"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      cpf: "",
      phone: ""
    }
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN (state, payload) {
      state.login = payload
    },
    UPDATE_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    getUser (context, payload) {
      auth.getUser(`/user/login/${payload}`).then(res => {
        context.commit("UPDATE_USER", res.data);
        context.commit("UPDATE_LOGIN", true);
      })
    }
  },
  modules: {}
})
