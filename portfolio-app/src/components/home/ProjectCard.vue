<template>
  <div class="project-card-container">
    <div class="thumbnail-container">
      <img
        class="thumbnail"
        height="100%"
        width="100%"
        :src="project.thumbnail"
        :style="style()"
      />
    </div>
    <div class="info-container">
      <span class="project-title">
        {{ project.title }}
      </span>
      <p>
        {{ project.description }}
      </p>
      <div class="spacer" />
      <router-link class="button" :to="project.internalURL">LEARN MORE</router-link>
      <div class="icon-container">
        <span v-for="icon in project.icons" :key="icon" :class="iconClass(icon)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  methods: {
    style () {
      return `object-position: ${this.project.thumbnailOrientation || 'top'};`
    },
    iconClass (icon) {
      return `mdi mdi-${icon} icon`
    }
  },
  props: ['project']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  color: #ebeff2;
  text-decoration: none;
  padding: 8px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 2px solid #ebeff2;
}
.button:hover {
  cursor: pointer;
  background-color: #AAA;
}
.button:focus {
  outline: none;
}

.icon {
  font-size: 28px;
  margin: 4px;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.info-container {
  padding: 8px;
  padding-top: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.project-card-container {
  margin: 8px;
  background-color: #26333e;
  color: #ebeff2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  max-width: 320px;
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.project-title {
  font-size: 24px;
}

.spacer {
  flex: 1;
  min-height: 8px;
}

.thumbnail {
  object-fit: cover;
  object-position: top;
}

.thumbnail-container {
  width: 100%;
  height: 176px;
  overflow: hidden;
}
</style>
