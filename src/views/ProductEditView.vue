<template>
  <section>
    <div v-if="product" class="product">
      <div class="info">
        <label for="title">Name</label>
      <input id="title" name="title" type="text" v-model="product.title">
      <label for="price">Valor Minimo (R$)</label>
      <input id="price" name="price" type="number" v-model="product.minimumValue">
      <label for="price">Valor Lance (R$)</label>
      <input id="price" name="price" type="number" v-model="product.bidValue">
      <label for="price">Descrição</label>
      <textarea id="price" name="price" v-model="product.description"></textarea>
        <button type="button" class="btn" @click.prevent="updateProduct()">Editar Anuncio</button>
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
    async getProduct () {
      productsConsumer.getBidding(`${this.id}`).then(response => {
        this.product = response;
      });
    },
    async updateProduct () {
      this.product.id = this.id;
      this.product.dueDate = (new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate());
      console.log("Product Update", this.product);
      await productsConsumer.updateBidding(this.product).then(response => {
        console.log("update response", response);
      })
      this.$router.push({ name: "user" })
    }
  },
  async created () {
    await this.getProduct()
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
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
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
