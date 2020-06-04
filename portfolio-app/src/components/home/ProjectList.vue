<template>
  <div class="list-container">
    <ProjectCard
      v-for="project in projects.filter(p => activeTechnology === 'All Projects' || p.technologies.includes(activeTechnology))"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'

import projects from '../../utilities/projects'

export default {
  name: 'ProjectList',
  data () {
    return {
      projects
    }
  },
  props: ['activeTechnology'],
  components: {
    ProjectCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
