<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProductAdd />
    <h2>Seus Produtos</h2>
    <transition-group v-if="products_user" name="list" tag="ul">
      <li v-for="(product, index) in products_user" :key="index">
        <ProductItem :product="product">
          <p>{{product.description}}</p>
          <button class="deletar" @click="deleteProduct(product.id)">Deletar</button>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProductAdd from "@/components/ProductAdd.vue";
import ProductItem from "@/components/ProductItem.vue";
import { mapState, mapActions } from "vuex";
import productsConsumer from "@/consumers/productsConsumer";

export default {
  name: "UserProducts",
  components: {
    ProductAdd,
    ProductItem
  },
  computed: {
    ...mapState(["login", "user", "products_user"])
  },
  methods: {
    ...mapActions(["getUserProducts"]),
    deleteProduct (id) {
      const confirm = window.confirm("Deseja remover esse anuncio?");
      if (confirm) {
        productsConsumer.deleteBidding(`${id}`).then(() => {
          this.getUserProducts();
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },
  watch: {
    login () {
      this.getUserProducts();
    }
  },
  created () {
    console.log(this.login);
    if (this.login) {
      this.getUserProducts();
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>
