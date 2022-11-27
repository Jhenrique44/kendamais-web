<template>
  <form class="adicionar-product">
    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="product.name">
    <label for="price">Preço (R$)</label>
    <input id="price" name="price" type="number" v-model="product.price">
    <!-- <label for="fotos">Fotos</label>
    <input id="fotos" name="fotos" type="file" ref="fotos"> -->
    <label for="price">Descrição</label>
    <textarea id="price" name="price" v-model="product.description"></textarea>
    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">
  </form>
</template>

<script>
export default {
  name: "ProductAdd",
  data () {
    return {
      product: {
        name: "",
        price: "",
        description: ""
      }
    }
  },
  methods: {
    formatarProduto () {
      this.product.user_id = this.$store.state.user.id;
    },
    adicionarProduto () {
      this.formatarProduto();
      // api.post("/product", this.product).then(() => {
      //   this.$store.dispatch("getUserProducts");
      // });
    }
  }
}
</script>

<style scoped>
.adicionar-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
