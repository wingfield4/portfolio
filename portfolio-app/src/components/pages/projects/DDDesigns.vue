<template>
  <ProjectPage :project="project" />
</template>

<script>
import ProjectPage from '../../project/ProjectPage'
import dddesignsBanner from '../../../assets/dddesignsBanner.png'

export default {
  name: 'DDDesigns',
  data () {
    return {
      project
    }
  },
  created () {
    document.title = `David Wingfield's Portfolio - D&D Designs`
  },
  components: {
    ProjectPage
  }
}

const project = {
  title: 'D&D Designs',
  bannerImage: dddesignsBanner,
  links: [
    {
      title: 'Source Code',
      url: 'https://github.com/wingfield4/dddesigns'
    }
  ],
  dataSections: [
    {
      title: 'Project Type',
      description: 'Person project developed in my off-time'
    },
    {
      title: 'Project Status',
      description: `
        Project is undergoing development in my spare time, is about 70% complete and I hope to launch later this summer.
      `
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
      title: 'What is D&D Designs?',
      description: `
        D&D Designs is a small business started by Danielle Wendell (my sister) and her husband Daren. 
        This site is the store page for the hand made products that are made and sold. It will allow highly-customizable
        orders, buy-it-now products, and easy communication between the customers and sellers, and controlled through a
        comprehensive admin interface.
      `
    },
    {
      title: 'Technical Overview',
      description: `
        The D&D Designs website is a php server in ther Laravel framework that uses blade templates and sass for 
        the front-end templates alongside a MySQL database. The testing and production instances are run with Google App Engine.
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
      iconName: 'language-php',
      label: 'PHP'
    },
    {
      iconName: 'laravel',
      label: 'Laravel'
    },
    {
      iconName: 'database',
      label: 'MySQL'
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
