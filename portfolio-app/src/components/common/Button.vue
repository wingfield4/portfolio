<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  color: #000;
  text-decoration: none;
  padding: 8px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 2px solid #000;
}
.button:hover {
  cursor: pointer;
  background-color: #AAA;
}
.button:focus {
  outline: none;
}
</style>
