<template>
  <div class="container">
    <span v-if="!project" class="mdi mdi-account-hard-hat icon"></span>
    <p v-if="!project" class="text">
      This page is under construction! Please check back later.
    </p>
    <div class="inner-container" v-if="project">
      <div class="banner-image-container" v-if="project.bannerImage">
        <img
          :src="project.bannerImage"
          height="100%"
          width="100%"
          class="banner-image"
          :style="bannerStyle()"
        />
      </div>
      <div class="info-container">
        <div class="left-container">
          <div class="title-container" v-if="project.links">
            View the Project
          </div>
          <div class="description-container" v-if="project.links">
            <div v-for="link in project.links" :key="link.title">
              <a :href="link.url" target="_blank">
                {{ link.title }}
              </a>
            </div>
          </div>
          <div v-for="dataSection in project.dataSections" :key="dataSection.title">
            <div class="title-container">
              {{ dataSection.title }}
            </div>
            <div class="description-container paragraph" v-html="dataSection.description" />
          </div>
        </div>
        <div class="right-container">
          <div v-for="infoSection in project.infoSections" :key="infoSection.title">
            <div class="title-container">
              {{ infoSection.title }}
            </div>
            <div class="description-container paragraph" v-html="infoSection.description" />
          </div>
          <div class="title-container" v-if="project.challenges && project.challenges.length > 0">
            Technical Challenges
          </div>
          <div class="description-container" v-if="project.challenges && project.challenges.length > 0">
            <ul>
              <li v-for="challenge in project.challenges" :key="challenge">
                {{ challenge }}
              </li>
            </ul>
          </div>
          <div class="title-container">
            Major Technologies
          </div>
          <div class="card-container">
            <TechnologyCard
              v-for="tech in project.majorTechnologies"
              :key="tech.label"
              :iconName="tech.iconName"
              :label="tech.label"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container" v-if="project">
      <div class="title-container">
        Other Projects
      </div>
      <div class="other-projects-container">
        <SmallProjectCard
          v-for="project in projects.filter(p => p.title !== project.title)"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
    <router-link class="button" to="/#projects">
      <span class="mdi mdi-chevron-left"></span>
      BACK TO HOME PAGE
    </router-link>
  </div>
</template>

<script>
import SmallProjectCard from './SmallProjectCard'
import TechnologyCard from '../home/TechnologyCard'
import projects from '../../utilities/projects'

export default {
  name: 'ProjectPage',
  props: ['project'],
  data () {
    return {
      projects
    }
  },
  methods: {
    bannerStyle () {
      return `object-position: ${this.project.bannerPosition || 'top'};`
    },
    goBack () {
      this.$router.push('/#projects')
    }
  },
  created () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  },
  components: {
    SmallProjectCard,
    TechnologyCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-image {
  object-fit: cover;
  object-position: top;
}

.banner-image-container {
  width: calc(100% - 8px);
  height: 256px;
  border: 4px solid #26333e;
}

.bottom-container {
  margin-top: 8px;
  border: 2px solid #26333e;
}

.button {
  color: #ebeff2;
  text-decoration: none;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0px;
  border: 0px;
  background-color: #26333e;
  font-size: 16px;
  border: 2px solid #26333e;
  margin-top: 8px;
  margin-left: 8px;
  position: fixed;
  top: 8px;
  left: 8px;
}
.button:hover {
  cursor: pointer;
  background-color: #AAA;
}
.button:focus {
  outline: none;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  min-height: 100%;
  background-color: #ebeff2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #26333e;
}

.description-container {
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: calc(100% - 16px);
  font-size: 14px;
}

.icon {
  font-size: 128px;
  margin-top: 48px;
}

.info-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 320px;
  flex-wrap: wrap;
}

.inner-container {
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
}

.left-container {
  flex: 4;
  border: 2px solid #26333e;
  margin: 8px;
  min-width: 240px;
}

.other-projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  padding: 8px;
}

.paragraph {
  /* text-indent: 16px; */
}

.right-container {
  flex: 8;
  border: 2px solid #26333e;
  margin: 8px;
  min-width: 320px;
}

.text {
  font-size: 18px;
  text-align: center;
}

.title-container {
  width: calc(100% - 16px);
  padding: 8px;
  font-size: 18px;
  background-color: #677077;
  color: #ebeff2;
  font-weight: bold;
}
</style>
