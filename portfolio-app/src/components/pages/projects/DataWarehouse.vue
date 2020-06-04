<template>
  <ProjectPage :project="project" />
</template>

<script>
import ProjectPage from '../../project/ProjectPage'

export default {
  name: 'DataWarehouse',
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
  title: 'MH Data Warehouse',
  bannerPosition: 'center',
  dataSections: [
    {
      title: 'Project Type',
      description: 'Professional project at Strictly Business Computer Systems'
    },
    {
      title: 'Project Status',
      description: `
        Project is nearing the end of the first year of funding, and may continue next year. 
        The project is not publicly accessible.
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
      title: 'What is the Marshall Health Data Warehouse?',
      description: `
        The Marshall Health Data Warehouse is a project funded by the CDC. It was started by Dr. Todd Davies of Marshall Health 
        in an effort to use the totality of health care data in Cabell County to more effectively analyize addition data and turn 
        that into actionable steps to address the opioid crisis. Before any technical work began, a lot of work by Dr. Davies and other 
        Marshall Health employees went into bringing the various organization that own this data together and on board with the project.
        After the project was funded, SBCS was approached to handle the technical aspects of migrating big data from multiple sources 
        into a single data warehouse to be analyzed securely and effectively.
      `
    },
    {
      title: 'Technical Overview',
      description: `
        This project was done in C# using the .NET Core framework. Entity Framework is used to handle migrations and most database
        interaction. The database is MSSQL and is hosted locally on Marshall Health servers.
      `
    }
  ],
  challenges: [
    'Working with large datasets (400GB+ total)',
    'Importing data from many different sources in many different formats',
    'Recognizing matching data points across different data sources',
    'Securely handling health care data'
  ],
  majorTechnologies: [
    {
      iconName: 'dot-net',
      label: '.NET Core'
    },
    {
      iconName: 'database',
      label: 'MSSQL'
    }
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
