<template>
  <div id="navigation-container" class="static-container">
    <div id="navigation-container" :class="containerClass">
      <div class="content-container">
        <a href="#about-me" class="nav-link">
          ABOUT ME
        </a>
        <a href="#projects" class="nav-link">
          PORTFOLIO
        </a>
        <a href="#contact" class="nav-link">
          CONTACT
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      containerClass: 'container'
    }
  },
  methods: {
    onScroll() {
      let containerElem = document.getElementById('navigation-container')

      if (containerElem.getBoundingClientRect().top > 0) {
        this.containerClass = `container`
      } else {
        this.containerClass = `container-fixed`
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #26333e;
  color: #ebeff2;
  height: 48px;
  display: flex;
  justify-content: center;
}

.container-fixed {
  background-color: #26333e;
  color: #ebeff2;
  height: 48px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
}

.content-container {
  flex: 1;
  max-width: 960px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.nav-link {
  height: 48px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ebeff2;
  margin-left: 12px;
  margin-right: 12px;
}

.nav-link:hover {
  color: #a3b48e;
}

.nav-link-active {
  height: 40px;
  color: #a3b48e;
  border-bottom: 4px solid #a3b48e;
  border-top: 4px solid #26333e;
}

.static-container {
  height: 48px;
  background-color: #26333e;
}
</style>
