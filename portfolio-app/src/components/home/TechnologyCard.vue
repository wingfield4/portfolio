<template>
  <a :href="link" target="_blank" class="card-container">
    <span :class="iconClass"></span>
    <div class="spacer" />
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'TechnologyCard',
  data () {
    return {
      iconClass: `mdi mdi-${this.iconName} card-icon`
    }
  },
  props: ['iconName', 'label', 'link']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  height: 88px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  margin: 8px;
  background-color: #26333e;
  color: #ebeff2;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
}

.card-container:hover {
  cursor: pointer;
  opacity: .8;
}

.card-icon {
  font-size: 40px;
}

.spacer {
  flex: 1;
}
</style>
