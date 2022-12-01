<template>
  <form class="add-product">
    <label for="title">Name</label>
    <input id="title" name="title" type="text" v-model="product.title">
    <label for="price">Valor Minimo (R$)</label>
    <input id="price" name="price" type="number" v-model="product.minimumValue">
    <label for="price">Valor Lance (R$)</label>
    <input id="price" name="price" type="number" v-model="product.bidValue">
    <!-- <label for="fotos">Fotos</label>
    <input id="fotos" name="fotos" type="file" ref="fotos"> -->
    <label for="price">Descrição</label>
    <textarea id="price" name="price" v-model="product.description"></textarea>
    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">
  </form>
</template>

<script>
import productsConsumer from "@/consumers/productsConsumer";

export default {
  name: "ProductAdd",
  data () {
    return {
      product: {
        title: "",
        description: "",
        minimumValue: 0,
        bidValue: 0,
        createdBy: "",
        dueDate: ""
      }
    }
  },
  methods: {
    async formatarProduto () {
      this.product.createdBy = this.$store.state.user.id;
      this.product.dueDate = (this.product.dueDate = (new Date().toJSON().slice(0, 10)););
      this.product.bidValue = parseFloat(this.product.bidValue);
      this.product.minimumValue = parseFloat(this.product.minimumValue);
    },
    async adicionarProduto () {
      await this.formatarProduto();
      console.log("Product", this.product)
      await productsConsumer.createBidding(this.product).then(() => {
        this.$store.dispatch("getUserProducts");
      });
    }
  }
}
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
