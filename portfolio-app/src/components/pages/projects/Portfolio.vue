<template>
  <ProjectPage :project="project" />
</template>

<script>
import ProjectPage from '../../project/ProjectPage'
import portfolioBanner from '../../../assets/splash_large.jpg'

export default {
  name: 'Portfolio',
  data () {
    return {
      project
    }
  },
  components: {
    ProjectPage
  }
}

const project = {
  title: 'My Portfolio',
  bannerImage: portfolioBanner,
  bannerPosition: 'center',
  links: [
    {
      title: 'Home',
      url: 'https://davidwingfield.dev'
    },
    {
      title: 'Source Code',
      url: 'https://github.com/wingfield4/portfolio'
    }
  ],
  dataSections: [
    {
      title: 'Project Type',
      description: 'Person project developed in my off-time'
    },
    {
      title: 'Project Status',
      description: 'Deployed and publicly accessible'
    },
    {
      title: 'My Role',
      description: `
        Sole developer
      `
    }
  ],
  infoSections: [
    {
      title: 'Technical Overview',
      description: `
        My Portfolio is a CSR Vue.js app that utilizes a Django web server and API. The app is hosted 
        with Google App Engine.
        <br /><br />

        Admittedly, it's a pretty simple application. Vue's super-simple components made it perfect for the site.
        Django's super-fast up-and-running development speed was ideal as well, though the web server doesn't do much other than serve the 
        Vue app bundle and handle requests from my 'Contact' section.
      `
    }
  ],
  majorTechnologies: [
    {
      iconName: 'language-html5',
      label: 'HTML'
    },
    {
      iconName: 'language-css3',
      label: 'CSS'
    },
    {
      iconName: 'language-javascript',
      label: 'JavaScript'
    },
    {
      iconName: 'vuejs',
      label: 'Vue.js'
    },
    {
      iconName: 'language-python',
      label: 'Django'
    },
    {
      iconName: 'google-cloud',
      label: 'GCP'
    }
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
