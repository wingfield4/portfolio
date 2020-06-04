<template>
  <div class="home-container">
    <Splash />
    <Navigation />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import AboutMe from '../home/AboutMe'
import Contact from '../home/Contact'
import Footer from '../common/Footer'
import Navigation from '../home/Navigation'
import Projects from '../home/Projects'
import Splash from '../home/Splash'

export default {
  name: 'Home',
  components: {
    AboutMe,
    Contact,
    Footer,
    Navigation,
    Projects,
    Splash
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100%;
}
</style>
