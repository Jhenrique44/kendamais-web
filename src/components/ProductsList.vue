<template>
  <section class="products-container">
    <transition mode="out-in">
      <div class="products" v-if="products && products.length" key="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <!-- <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.fotos[0].titulo"
            /> -->
            <p class="price">Valor Minimo: {{ product.minimumValue | numberPrice }}</p>
            <p class="price">Lance: {{ product.bidValue | numberPrice }}</p>
            <h2 class="title">{{ product.title }}</h2>
            <p class="descprition">{{ product.description }}</p>
          </router-link>
        </div>
      </div>
      <div v-else-if="products && products.length === 0" key="without-result">
        <p class="without-result">
          Busca sem resultados. Tente Buscar outro produto.
        </p>
      </div>
      <!-- <div v-else> -->
      <LoadingPage key="loading" v-else />
      <!-- </div> -->
    </transition>
  </section>
</template>
<script>
import { serialize } from "@/helpers";
import productsConsumer from "@/consumers/productsConsumer";
export default {
  name: "ProductsList",
  data () {
    return {
      productsPerPage: 9,
      products: null
    }
  },
  computed: {
    url () {
      const query = serialize(this.$route.query);
      return `/bidding?_limit=${this.productsPerPage}${query}`
    }
  },
  created () {
    this.getProducts();
  },
  methods: {
    getProducts () {
      this.products = null;
      productsConsumer.getAllBiddings().then(res => {
        console.log("response get all", res);
        this.products = res;
      });
    }
  },
  watch: {
    url () {
      this.getProducts();
    }
  }
};
</script>
<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}
.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}
.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}
.products img {
  border-radius: 4px;
  margin-bottom: 20px;
}
.price {
  color: #ffb449;
  font-weight: bold;
}
.title{
  font-weight: bold;
}
.descprition{
  font-style: none;
  color: black;
}
.without-result {
  text-align: center;
}
</style>
