<template>
  <form>
    <input name="find" id="find" type="text" v-model="find" placeholder="Buscar...">
    <input type="submit" id="lupa" value="Buscar" @click.prevent="findProducts">
  </form>
</template>

<script>
export default {
  name: "ProductsFind",
  data () {
    return {
      find: ""
    }
  },
  methods: {
    findProducts () {
      this.$router.push({ query: { q: this.find } });
    }
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
