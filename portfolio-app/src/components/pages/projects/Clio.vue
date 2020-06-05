<template>
  <ProjectPage :project="project" />
</template>

<script>
import ProjectPage from '../../project/ProjectPage'
import clioBanner from '../../../assets/clio_banner.png'

export default {
  name: 'Clio',
  data () {
    return {
      project
    }
  },
  created () {
    document.title = `David Wingfield's Portfolio - Clio`
  },
  components: {
    ProjectPage
  }
}

const project = {
  title: 'Clio',
  bannerImage: clioBanner,
  links: [
    {
      title: 'https://theclio.com',
      url: 'https://theclio.com'
    },
    {
      title: 'iOS App',
      url: 'https://apps.apple.com/us/app/clio-your-guide-to-history/id897995724'
    },
    {
      title: 'Android App',
      url: 'https://play.google.com/store/apps/details?id=com.theclio.clio&hl=en'
    }
  ],
  challenges: [
    `Using users' location to offer the most relevant content`,
    `Content Management systems with full version histories`,
    `Multiple user-roles with different dashboards and functionality`,
    `Implementing third-party APIs such as Google Maps, Directions, and Geolocation`,
    `Custom color schemes and font size for better accessibility`,
    `Redesigning the database and migrating old data into the new schema`
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
      iconName: 'nodejs',
      label: 'NodeJS'
    },
    {
      iconName: 'react',
      label: 'React'
    },
    {
      iconName: 'react',
      label: 'React Native'
    },
    {
      iconName: 'google-cloud',
      label: 'GCP'
    },
    {
      iconName: 'database',
      label: 'MySQL'
    }
  ],
  dataSections: [
    {
      title: 'Project Type',
      description: 'Professional project at Strictly Business Computer Systems'
    },
    {
      title: 'Project Status',
      description: 'Clio is deployed, accessible to public, and is being maintained with consistent updates.'
    },
    {
      title: 'My Role',
      description: `
        Clio in its current state is actually the second iternation of the site, Clio '2.0'.
        I worked briefly on Clio '1.0' before beginning development on '2.0'. Clio 2.0 moved from PHP/Symfony
        to the current architecture, and implemented 100% new code and even a re-designed database. I was the sole 
        developer on Clio '2.0' until its launch in August 2019, and have been lead developer since then, occasionally 
        partnering with coworkers to implement certain features.
      `
    }
  ],
  infoSections: [
    {
      title: 'What is Clio?',
      description: `
        "Clio is an educational website and mobile application that guides the public 
        to thousands of historical and cultural sites throughout the United States.
        <br /><br />

        Named after the ancient muse of history, Clio uses GPS to reach the 
        public where they stand and guide them to museums and historical and 
        cultural sites. Each entry includes concise information, embedded 
        media, and links to primary sources and relevant books and articles. 
        Clio also offers maps and navigation, as well as useful information 
        for visitors to museums, libraries, and historical sites."
      `
    },
    {
      title: 'Technical Overview',
      description: `
        Clio is a <b>CSR React App</b> that utilizes a <b>RESTful API</b> to load and save data. 
        The API is written in <b>NodeJS</b>, using the <b>Koa framework</b> and <b>Sequelize ORM</b>. 
        Clio uses a <b>MySQL</b> database.
        <br /><br />

        Clio also has Android and iOS apps written with <b>React Native</b>. The mobile app utilizes the API along with a  
        <b>SQLite</b> database to store downloaded tours for offline use. Some features in the app 
        are simply a WebView loading the site's functionality to save on development costs, but 
        others are React Native components to allow native mobile functionality.
        <br /><br />

        Clio uses the <b>Google Cloud Platform</b> for a number of things. The app is 
        hosted with Google App Engine, user-uploaded images are stored with Google Storage,
        and the database is hosted with Google Cloud SQL.
      `
    }
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
