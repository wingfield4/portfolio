<template>
  <div id="projects-container" class="container">
    <a name="projects"></a>
    <div class="spacer" />
    <h2 class="title">
      Portfolio
    </h2>
    <div class="divider" />
    <div class="inner-container">
      <!-- <ProjectFilter :activeTechnology="activeTechnology" :onChangeTechnology="onChangeTechnology" /> -->
      <ProjectList :activeTechnology="activeTechnology" />
    </div>
  </div>
</template>

<script>
import ProjectList from './ProjectList'

export default {
  name: 'Projects',
  data () {
    return {
      activeTechnology: 'All Projects'
    }
  },
  methods: {
    onChangeTechnology (tech) {
      this.activeTechnology = tech
    }
  },
  components: {
    ProjectList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-bottom: 64px;
  background-color: #d3d7d9;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.54);
  width: calc(100% - 32px);
  max-width: 600px;
  margin-bottom: 32px;
}

.inner-container {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer {
  height: 48px;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
}
</style>
