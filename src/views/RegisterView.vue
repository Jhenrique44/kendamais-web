<template>
  <div class="about">
    <section class="first-container"></section>
    <section class="second-container">
      <div class="card-login">
        <div class="header">
          <div class="logo">
            <router-link to="/">
              <img
                src="../assets/Logo.svg"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
            </router-link>
          </div>
        </div>
        <form action="login-form">
          <div class="input-row">
            <b-field>
              <b-input
                v-model="formData.name"
                placeholder="Nome"
                type="text"
                maxlength="30"
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="formData.email"
                placeholder="E-mail"
                type="email"
                maxlength="30"
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="formData.cpf"
                placeholder="CPF ou CNPJ"
                type="cpf"
                maxlength="30"
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="formData.cellphone"
                placeholder="Telefone"
                type="phone"
                maxlength="30"
              ></b-input>
            </b-field>
            <b-field>
              <b-input
                v-model="formData.password"
                placeholder="Senha"
                type="password"
                password-reveal
              ></b-input>
            </b-field>
          </div>
          <div class="buttons-row">
            <b-button class="continue-btn" @click="createUser()"
              >Continuar</b-button
            >
          </div>
        </form>
      </div>
    </section>
    <footer>
      <CopyrightsAll />
    </footer>
  </div>
</template>
<script>
import CopyrightsAll from "@/components/CopyrightsAll.vue";
import auth from "../consumers/auth";
export default {
  name: "RegisterView",
  components: {
    CopyrightsAll
  },
  data () {
    return {
      formData: {
        name: "",
        password: "",
        email: "",
        cpf: "",
        cellphone: ""
      }
    }
  },
  methods: {
    insertUser () {
      // const vm = this;
      // if (this.formData.cpf.length > 11) {
      //   vm.formData.cnpj = vm.formData.cpf;
      //   vm.formData.cpf = "";
      // }
      console.log(this.formData)
      auth.signup(this.formData);
      localStorage.setItem("tokenAuth", "gksujdhfgiuadfh");
    },
    async createUser () {
      try {
        await this.$store.dispatch("createUser", this.formData);
        // await this.$store.dispatch("loginUser", this.$store.state.user);
        // await this.$store.dispatch("getUser");
        this.$router.push({ name: "user" });
      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
};
</script>
<style scoped>
.about {
  min-height: calc(100vh - 52px);
}
.first-container {
  height: 35vh;
  background-color: #ffb449;
}
img {
  height: 40px;
  width: 200px;
}
.card-login {
  min-width: 250px;
  width: 35vw;
  max-width: 500px;
  margin: -12rem auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.b-label {
  float: left;
}
.buttons-row {
  display: flex;
  justify-content: flex-end;
}
.create-btn {
  border: none;
}
.create-btn:hover {
  text-decoration: underline;
}
.continue-btn {
  display: flex;
  background-color: #0069be;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 180px;
}
</style>
