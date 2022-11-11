<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <h2 class="title">{{product.name}}</h2>
      <p class="preco">{{product.price}}</p>
      <p class="title">{{product.description}}</p>
    </div>
  </section>
</template>

<script>
import { getProducts } from "@/consumers/productsApi";
export default {
  name: "ProductsList",
  data () {
    return {
      products: null
    }
  },
  created () {
    getProducts();
  },
  methods: {
    // getProducts () {
    //   api.get("/product").then(res => {
    //     this.products = res.data;
    //   })
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
