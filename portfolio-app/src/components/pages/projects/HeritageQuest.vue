<template>
  <ProjectPage :project="project" />
</template>

<script>
import ProjectPage from '../../project/ProjectPage'
import heritageQuestBanner from '../../../assets/heritageQuest.png'

export default {
  name: 'HeritageQuest',
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
  title: 'Heritage Quest',
  bannerImage: heritageQuestBanner,
  bannerPosition: 'center',
  links: [
    {
      title: 'iOS App',
      url: 'https://apps.apple.com/at/app/heritage-quest/id1459390891?l=en'
    }
  ],
  dataSections: [
    {
      title: 'Project Type',
      description: 'Professional project at Strictly Business Computer Systems'
    },
    {
      title: 'Project Status',
      description: `
        Project is complete and has been released to the Android and iOS app stores.
      `
    },
    {
      title: 'My Role',
      description: `
        Lead developer
      `
    }
  ],
  infoSections: [
    {
      title: 'What is Heritage Quest?',
      description: `
        Heritage Quest is an interactive experience made to be experienced alongisde Heritage Farm Museum and Village in Huntington, WV.
        In Heritage Quest, you can start a quest: Hunting, Food, Shelter, or Clothing. Around Heritage Farm, you'll find items to help you complete 
        these quests. These items are accompanied by cards with QR codes on them. Scanning these QR codes will unlock the items in-app and 
        allow you to complete the quest!
      `
    },
    {
      title: 'Technical Overview',
      description: `
        Heritage Quest is a simple React Native app that uses a small SQLite database to track user progression along these quests.
        The app interfaces with the user's camera to scan QR codes.
      `
    }
  ],
  majorTechnologies: [
    {
      iconName: 'language-javascript',
      label: 'JavaScript'
    },
    {
      iconName: 'react',
      label: 'React Native'
    },
    {
      iconName: 'database',
      label: 'SQLite'
    }
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
