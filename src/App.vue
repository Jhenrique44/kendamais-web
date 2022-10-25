<template>
  <div id="app">
    <NavbarMain />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>
<script>
import NavbarMain from "./components/NavbarMain.vue"
export default {
  components: {
    NavbarMain
  },
  created () {
    // console.log(window.localStorage.token)
    // if (window.localStorage.token) {
    // this.$store.dispatch("getUser")
    // }
  }
}
</script>
<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
