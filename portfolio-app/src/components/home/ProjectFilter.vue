<template>
  <div class="filter-container">
    <button
      v-for="tech in technologies" 
      :key="tech" 
      :class="getClass(tech)"
      @click="onChangeTechnology(tech)"
    >
      {{ tech }}
    </button>
  </div>
</template>

<script>
const technologies = [
  'All Projects',
  'JavaScript',
  'HTML',
  'CSS',
  'NodeJS',
  'React',
  'React Native',
  'Vue.js',
  'Google Cloud',
  'PHP',
  'Laravel'
]

export default {
  name: 'ProjectFilter',
  data () {
    return {
      technologies
    }
  },
  props: ['activeTechnology','onChangeTechnology'],
  methods: {
    getClass (tech) {
      if(tech === this.activeTechnology) return 'button button-active'
      return 'button'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-container {
  /* border: 2px solid #26333e; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.button {
  color: #26333e;
  text-decoration: none;
  padding: 8px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 2px solid #26333e;
  margin: 8px;
}
.button:hover {
  cursor: pointer;
  background-color: #AAA;
}
.button:focus {
  outline: none;
}

.button-active {
  background-color: #26333e;
  color: #ebeff2;
}
.button-active:hover {
  background-color: #26333e;
}
</style>
