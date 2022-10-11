<template>
  <div class="about">
    <section class="first-container"></section>
    <section class="second-container">
      <div class="card-login">
        <div class="header">
          <div class="logo" tag="router-link" :to="{ path: '/' }">
            <img
              src="../assets/Logo.svg"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </div>
        </div>
        <form action="login-form">
          <div class="input-row">
            <b-field
            >
              <b-input placeholder="Nome"  type="text" maxlength="30"></b-input>
            </b-field>
            <b-field
            >
              <b-input placeholder="E-mail" type="email" maxlength="30"></b-input>
            </b-field>
            <b-field
            >
              <b-input placeholder="CPF ou CNPJ" type="cpf" maxlength="30"></b-input>
            </b-field>
            <b-field
            >
              <b-input placeholder="Telefone" type="email" maxlength="30"></b-input>
            </b-field>
            <b-field
            >
              <b-input placeholder="Senha" type="password" password-reveal ></b-input>
            </b-field>
            <b-field
            >
              <b-input placeholder="Confirme sua Senha" type="password" password-reveal ></b-input>
            </b-field>
          </div>
          <div class="buttons-row">
            <b-button class="continue-btn">Continuar</b-button>
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
import CopyrightsAll from "@/components/CopyrightsAll.vue"
export default {
  name: "RegisterView",
  components: {
    CopyrightsAll
  }
}
</script>
<style scoped>
.about {
  min-height: 100vh;
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
