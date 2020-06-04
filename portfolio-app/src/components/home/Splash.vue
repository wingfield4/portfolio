<template>
  <div class="splash-container" :style="style">
    <h1 class="title">
      David Wingfield
    </h1>
    <div class="divider" />
    <h2>
      Software Engineer
    </h2>
    <a class="button" href="#about-me">
      VIEW MY WORK
      <span class="mdi mdi-chevron-down button-icon"></span>
    </a> 
  </div>
</template>

<script>
import splashSmall from '../../assets/splash_small.jpg'
import splashLarge from '../../assets/splash_large.jpg'

export default {
  name: 'Splash',
  data () {
    return {
      style: `background-image: url(${splashSmall});`
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 1280) {
        this.style = `background-image: url(${splashSmall});`
      } else {
        this.style = `background-image: url(${splashLarge});`
      }
    }
  },
  created() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-icon {
  font-size: 18px;
}

.button {
  color: #000;
  text-decoration: none;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 2px solid #000;
  margin-top: 32px;
}
.button:hover {
  cursor: pointer;
  background-color: #AAA;
}
.button:focus {
  outline: none;
}

.divider {
  height: 1px;
  background-color: rgba(0, 0, 0, .54);
  width: calc(100% - 16px);
  max-width: 600px;
}

.splash-container {
  background-attachment: fixed;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #07020D;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.title {
  max-width: 680px;
  text-align: center;
  font-size: 56px;
  margin-block-end: .33em;
  font-weight: 300;
}

@media (max-width: 768px) {
  .splash-container {
    background-attachment: scroll;
  }

  .title {
    font-size: 40px
  }
}
</style>
