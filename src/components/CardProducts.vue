<template>
  <div class="copyrights">
    <div class="text-container">
      <h2>Copyright @ Quinteto Fantástico</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProducts"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyrights {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 10px 20px;
  width: 100%;
  background-color: #d9d9d9;
}
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-family: "Inter", sans-serif;
  color: black;
  font-weight: 700;
  font-size: 12px;
}
</style>
