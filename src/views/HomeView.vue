<template>
  <div class="home">
    <CarrousselHome />
    <ProductsList />
    <ProductsFind />
    <footer>
      <CopyrightsAll />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import NavbarMain from "@/components/NavbarMain.vue"
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import CarrousselHome from "@/components/CarrousselHome.vue";
import CopyrightsAll from "../components/CopyrightsAll.vue";
import ProductsList from "@/components/ProductsList.vue";
import ProductsFind from "@/components/ProductsFind.vue";

Vue.use(Buefy);
export default {
  name: "HomeView",
  components: {
    // NavbarMain,
    CarrousselHome,
    CopyrightsAll,
    ProductsFind,
    ProductsList
  }
}
</script>
<style>
.home {
  min-height: calc(100vh - 52px);
}
</style>
