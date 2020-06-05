<template>
  <ProjectPage :project="project" />
</template>

<script>
import ProjectPage from '../../project/ProjectPage'
import easyAlliesBanner from '../../../assets/easyAlliesBanner.png'

export default {
  name: 'EasyAllies',
  data () {
    return {
      project
    }
  },
  created () {
    document.title = `David Wingfield's Portfolio - Easy Allies`
  },
  components: {
    ProjectPage
  }
}

const project = {
  title: 'Easy Allies Companion',
  bannerImage: easyAlliesBanner,
  bannerPosition: 'center',
  links: [
    {
      title: 'Source Code',
      url: 'https://github.com/wingfield4/easy-allies'
    }
  ],
  dataSections: [
    {
      title: 'Project Type',
      description: 'Personal project developed in my off-time'
    },
    {
      title: 'Project Status',
      description: `
        Project is complete, but it was mostly just for fun, and I haven't made any moves to publish it for public use.
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
      title: 'What is the Easy Allies Companion App?',
      description: `
        Easy Allies is "an independent group of experienced writers and video producers who love playing video games, analyzing the games industry, and interacting with the community."
        This *unofficial* app allows the community to easily keep up with the latest update by viewing the latest tweets of all the allies,
        watching the latest YouTube uploads, listening to the latest podcasts, viewing the upcoming schedule, and receving notifications
        when the twitch channel goes live.
      `
    },
    {
      title: 'Technical Overview',
      description: `
        This is a fully cross-platform React Native app that uses a NodeJS server to access a number of third-party APIs, cache their data, and serve it to the app.
        Google's YouTube Data API is used to discover and download the meta data for the latest Easy Allies uploads. Google Calendar API 
        is used to load any upcoming events. Twitch's API is sued to see if the channel is live or not and load the stream title and viewer count. 
        Twitter's API is used to find and cache the latest tweets and retweets from all of Easy Allies. And finally, Podcast RSS feeds
        are downloaded and parsed to find the latest uploads from all Easy Allies podcasts.
        <br /><br />
        All of this data is served by the NodeJS server (hosted in Google App Engine) to be rendered in the simple-to-navigate app. Additionall,
        Podcasts can be selected and listened to while the app is open or closed.
      `
    }
  ],
  majorTechnologies: [
    {
      iconName: 'language-javascript',
      label: 'JavaScript'
    },
    {
      iconName: 'nodejs',
      label: 'NodeJS'
    },
    {
      iconName: 'react',
      label: 'React Native'
    },
    {
      iconName: 'database',
      label: 'SQLite'
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
