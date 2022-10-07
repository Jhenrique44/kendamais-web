<template>
  <div class="home">
    <HelloWorld1 />
    <CarrousselHome />
    <footer>
      <CopyrightsAll />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld1 from "@/components/HelloWorld1.vue"
import Vue from "vue"
import Buefy from "buefy"
import "buefy/dist/buefy.css"
import CarrousselHome from "@/components/CarrousselHome.vue"
import CopyrightsAll from "../components/CopyrightsAll.vue"

Vue.use(Buefy)
export default {
  name: "HomeView",
  components: {
    HelloWorld1,
    CarrousselHome,
    CopyrightsAll
  }
}
</script>
<style>
.home {
  min-height: 100vh;
}
</style>
