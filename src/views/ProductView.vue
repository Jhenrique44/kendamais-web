<template>
  <section>
    <div v-if="product" class="product">
      <!-- <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo">
        </li>
      </ul> -->
      <div class="info">
        <h1>{{product.title}}</h1>
        <p class="preco">{{product.bidValue | numberPrice}}</p>
        <p class="preco">{{product.minimumValue | numberPrice}}</p>
        <p class="descricao">{{product.description}}</p>
        <button class="btn" v-if="product.sold === 'false'">Dar Lance</button>
        <button v-else class="btn" :disabled="true">Produto Arrematado</button>
      </div>
    </div>
    <loading-page v-else/>
  </section>
</template>

<script>
import LoadingPage from "@/components/LoadingPage.vue";
import productsConsumer from "@/consumers/productsConsumer";

export default {
  components: { LoadingPage },
  name: "ProductView",
  props: ["id"],
  data () {
    return {
      product: null
    };
  },
  methods: {
    getProduct () {
      productsConsumer.getBidding(`${this.id}`).then(response => {
        this.product = response;
      });
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}
h1 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}
.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.fotos {
  grid-row: 1 / 3;
}

.info {
  position: sticky;
  top: 20px;
}

.descricao {
  font-size: 1.2rem;
}

img {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  border-radius: 4px;
}

.btn {
  margin-top: 60px;
  width: 200px;
}

@media screen and (max-width: 500px) {
  .product {
    grid-template-columns: 1fr;
  }
  .fotos {
    grid-row: 2;
  }
  .info {
    position: initial;
  }
}
</style>
