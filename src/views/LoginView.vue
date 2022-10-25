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
            <b-field
              label="Informe seu e-mail para continuar"
              label-position="left"
            >
              <b-input type="email" maxlength="30" v-model="user.email" placeholder="123@123.com"></b-input>
            </b-field>
          </div>
          <b-field
              label="Password"
            >
              <b-input type="password" maxlength="30" v-model="user.password" password-reveal></b-input>
            </b-field>
          <div class="buttons-row">
            <router-link to="/register">
              <b-button class="create-btn">Criar Conta</b-button>
            </router-link>
            <b-button class="continue-btn" @click="logar()">Continuar</b-button>
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
export default {
  name: "LoginView",
  components: {
    CopyrightsAll
  },
  data () {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async logar () {
      await this.$store.dispatch("loginUser", this.user);
      // this.$store.dispatch("getUser", this.user);
      this.$router.push({ name: "user" })
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
  min-width: 300px;
  width: 45vw;
  max-width: 550px;
  margin: -7rem auto;
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
  justify-content: space-between;
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
