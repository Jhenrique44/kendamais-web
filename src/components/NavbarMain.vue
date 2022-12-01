<template>
  <div class="hello">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/Logo.svg" alt="Kendamais logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <!-- <b-navbar-item> -->
        <!-- <b-input
          class="search-input"
          expanded
          placeholder="Search..."
          icon="search"
          icon-clickable
        ></b-input> -->
        <!-- </b-navbar-item> -->
        <!-- <b-navbar-item href="#"> Home </b-navbar-item>
        <b-navbar-item href="#"> Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#"> About</b-navbar-item>
          <b-navbar-item href="#"> Contact</b-navbar-item>
        </b-navbar-dropdown> -->
      </template>

      <template v-if="userLogged == true" #end>
        <b-navbar-item tag="div">
          <div v-if="$store.state.login">
            <router-link  to="/user">
             <a>Bem vindo {{ name }}</a>
          </router-link>
          </div>
          <div v-else class="buttons">
            <router-link to="/register">
              <a class="button"> Criar Conta </a>
            </router-link>
            <router-link to="/login">
              <a class="button is-light">Entrar</a>
            </router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarMain",
  computed: {
    name () {
      return this.$store.state.user.name.replace(/ .*/, "")
    }
  },
  data () {
    return {
      userLogged: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  height: 52px;
}
.navbar {
  background-color: #ffb449 !important;
}
.navbar-start {
  width: 80% !important;
  display: flex;
  align-items: center !important;
  justify-content: center;
  padding: 0 20px;
}
.search-input {
  width: 100%;
  max-width: 1000px;
}
.navbar-item {
  padding: 0;
}
.button {
  border: none;
  background: transparent;
}
@media screen and (max-width: 1024px) {
  .navbar-menu {
    background-color: transparent !important;
  }
}
</style>
<style scoped>
.buttons {
  border: none;
  gap: 2rem;
}
a {
  font-size: 16px;
  font-weight: bold;
}
</style>
