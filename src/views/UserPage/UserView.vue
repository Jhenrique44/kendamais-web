<template>
  <section class="user-container">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'user'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-edit' }">Editar Usuário</router-link>
        </li>
        <li>
          <b-button class="unlog-btn" @click="logout()">Deslogar</b-button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
export default {
  name: "UserView",
  data () {
    return {};
  },
  methods: {
    logout () {
      this.$store.dispatch("logOut");
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.user-container {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  margin: 40px auto;
  max-width: 900px;
  grid-gap: 30px;
  padding: 20px;
  width: 100%;
}
@media screen and (max-width: 500px) {
  .user-container {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}
li:active, li:focus{
  background: #ffb449;
  color: #fff;
}
.sidenav a,
.unlog-btn
 {
  color: black;;
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
  text-align: left;
  font-weight: 600;
}
.sidenc a.router-link-exact-active,
.sidenav a:hover,
.sidenav a:active,
.sidenav a:focus,
.unlog-btn:hover{
  background: #ffb449;
  color:  #fff;
}
.unlog-btn {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
</style>
