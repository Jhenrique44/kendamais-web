<template>
  <div class="hello">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="../assets/Logo.svg"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item>
          <b-input
            expanded
            placeholder="Search..."
            icon="search"
            icon-clickable
          ></b-input>
        </b-navbar-item>
        <!-- <b-navbar-item href="#"> Home </b-navbar-item>
        <b-navbar-item href="#"> Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#"> About</b-navbar-item>
          <b-navbar-item href="#"> Contact</b-navbar-item>
        </b-navbar-dropdown> -->
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld1",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar {
  background-color: #ffb449 !important;
}
.navbar-start {
  width: 100% !important;
}
</style>
