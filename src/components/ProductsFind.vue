<template>
  <form>
    <input name="find" id="find" type="text" v-model="find">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
