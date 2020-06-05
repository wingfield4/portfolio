<template>
  <div class="container">
    <div class="inner-container">
      <a name="about-me"></a>
      <div class="spacer" />
      <h2 class="title">
        About Me
      </h2>
      <div class="divider" />
      <p class="about-text">
        I'm a Software Engineer at Strictly Business Computer Systems (SBCS) in Huntington, West Virginia. 
        <br />I’m passionate about creating modern, powerful web and mobile applications.
      </p>
      <div class="info-container">
        <div class="skills-container">
          <span class="section-title">
            I am Most Proficient With
          </span>
          <div class="divider small-divider" />
          <div class="card-container">
            <TechnologyCard iconName="language-html5" label="HTML" link="https://en.wikipedia.org/wiki/HTML" />
            <TechnologyCard iconName="language-css3" label="CSS" link="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" />
            <TechnologyCard iconName="language-javascript" label="JavaScript" link="https://en.wikipedia.org/wiki/JavaScript" />
            <TechnologyCard iconName="nodejs" label="NodeJS" link="https://nodejs.dev/" />
            <TechnologyCard iconName="react" label="React" link="https://reactjs.org/" />
            <TechnologyCard iconName="react" label="React Native" link="https://reactnative.dev/" />
            <TechnologyCard iconName="database" label="SQL" link="https://en.wikipedia.org/wiki/SQL" />
            <TechnologyCard iconName="git" label="Git" link="https://git-scm.com/" />
          </div>
          <span class="section-title">
            I am Proficient With
          </span>
          <div class="divider small-divider" />
          <div class="card-container">
            <TechnologyCard iconName="vuejs" label="Vue.js" link="https://vuejs.org/" />
            <TechnologyCard iconName="google-cloud" label="Google Cloud" link="https://cloud.google.com/" />
            <TechnologyCard iconName="language-php" label="PHP" link="https://www.php.net/" />
            <TechnologyCard iconName="laravel" label="Laravel" link="https://laravel.com/" />
            <TechnologyCard iconName="dot-net" label=".NET" link="https://dotnet.microsoft.com/" />
          </div>
          <span class="section-title">
            I Have Experience With
          </span>
          <div class="divider small-divider" />
          <div class="card-container">
            <TechnologyCard iconName="angular" label="Angular" link="https://angular.io/" />
            <TechnologyCard iconName="language-python" label="Python" link="https://www.python.org/" />
            <TechnologyCard iconName="language-java" label="Java" link="https://www.java.com/en/" />
            <TechnologyCard iconName="language-cpp" label="C++" link="https://www.cplusplus.com/" />
          </div>
        </div>
        <div class="right-container">
          <div class="portrait-container">
            <img
              src="../../assets/portrait_2.jpg"
              height="100%"
              width="100%"
              class="portrait"
            />
          </div>
          <div class="socials-container">
            <a class="social-link" href="https://twitter.com/d_wingfield_dev" target="_blank">
              <span class="mdi mdi-twitter"></span>
            </a>
            <a class="social-link" href="https://www.linkedin.com/in/david-wingfield-39ab701a5/" target="_blank">
              <span class="mdi mdi-linkedin"></span>
            </a>
            <a class="social-link" href="https://github.com/wingfield4" target="_blank">
              <span class="mdi mdi-github"></span>
            </a>
          </div>
          <a class="button" href="/static/David_Wingfield_Resume.pdf" target="_blank">
            <span class="mdi mdi-download"></span>
            DOWNLOAD MY RESUME
          </a>
          <br /><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyCard from './TechnologyCard'

export default {
  name: 'AboutMe',
  components: {
    TechnologyCard
  }
}
</script>

<style scoped>
.about-text {
  text-align: center;
  margin-bottom: 48px;
}

.button {
  color: #26333e;
  text-decoration: none;
  padding: 8px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 2px solid #26333e;
  margin-bottom: 24px;
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
  margin-bottom: 16px;
  justify-content: center;
}

.container {
  background-color: #ebeff2;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  height: 1px;
  background-color: rgba(0, 0, 0, .54);
  width: calc(100% - 32px);
  max-width: 600px;
  margin-bottom: 32px;
}

.inner-container {
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-container {
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.portrait {
  object-fit: cover;
  object-position: bottom;
}

.portrait-container {
  width: 340px;
  height: 480px;
  border: 4px solid #26333e;
  overflow: hidden;
  margin-bottom: 16px;
}

.right-container {
  text-align: center;
}

.section-title {
  font-size: 22px;
  text-align: center;
}

.skills-container {
  flex: 1;
  min-width: 328px;
  padding: 16px;
  padding-top: 0px;
  /* text-align: start; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small-divider {
  margin-top: 8px;
  margin-bottom: 8px;
}

.socials-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 24px;
}

.social-link {
  font-size: 32px;
  color: #26333e;
  margin-right: 8px;
}

.spacer {
  height: 48px;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
}
</style>
