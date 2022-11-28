<template>
  <div class="product" v-if="product">
    <router-link class="product-img" :to="{name: 'product', params: {id: product.id}}">
      <!-- <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo"> -->
      <p class="view">Ver Produto</p>
    </router-link>
    <router-link :to="{name: 'product-edit', params: {id: product.id}}">
      <p class="view">Editar Produto</p>
    </router-link>
    <div class="info">
      <h2 class="titulo">{{product.title}}</h2>
      <p class="preco">Lance: {{product.bidValue | numberPrice}}</p>
      <p class="preco">Valor Minimo: {{product.minimumValue | numberPrice}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["product"]
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

@media screen and (max-width: 500px) {
  .product {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
}
h2 {
  font-size: 22px;
  font-weight: bold;

}
.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 10px;
}
.info {
  align-self: end;
}
.view {
  font-size: 22px;
  font-weight: bold;
  color: #87f;
  cursor: pointer;
}
.view:hover {
  transform: scale(1.02);
}
.produto-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style>
