import auth from "@/consumers/auth"
import userConsumer from "@/consumers/userConsumer"
import productsConsumer from "@/consumers/productsConsumer"
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
    },
    products_user: null
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN (state, payload) {
      state.login = payload
    },
    UPDATE_USER (state, payload) {
      state.user = Object.assign(state.user, payload)
    },
    UPDATE_USER_PRODUCTS (state, payload) {
      state.products_user = payload;
    },
    ADD_USER_PRODUCTS (state, payload) {
      state.products_user.unshit(payload);
    }
  },
  actions: {
    async getUserProducts (context) {
      console.log("getUserProduct", context);
      return productsConsumer.getAllBiddings().then(response => {
        console.log("Response List", response)
        context.commit("UPDATE_USER_PRODUCTS", response);
      })
    },
    getUser (context) {
      console.log(context)
      return userConsumer.getUser(context).then(res => {
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
      console.log(payload);
      return auth.signin({
        email: payload.email,
        password: payload.password
      }).then(res => {
        context.commit("UPDATE_USER", res);
        context.commit("UPDATE_LOGIN", true);
        // window.localStorage.token = `Bearer ${res.data.token}`
        console.log({ res })
      })
    },
    logOut (context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        cpf: "",
        cellphone: "",
        password: ""
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {}
})
