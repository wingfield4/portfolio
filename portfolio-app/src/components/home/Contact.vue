<template>
  <div id="contact-container" class="container">
    <a name="contact"></a>
    <div class="spacer" />
    <h2 class="title">
      Contact Me
    </h2>
    <div class="divider" />
    <div class="inner-container">
      <span class="description">

      </span>
      <div class="form-container">
        <label for="name" class="label">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          maxlength="100"
          class="input"
          v-model="name"
          required
        >
        <label for="email" class="label">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          maxlength="100"
          class="input"
          v-model="email"
          required
        >
        <label for="message" class="label">Your Message</label>
        <textarea
          id="message"
          name="message"
          class="textarea"
          v-model="message"
          required
        ></textarea>

        <div class="error">
          {{ error }}
        </div>
        <div class="success">
          <span v-if="submitted">
            Your message has been sent! I'll get back to you soon. Thanks for visiting!
          </span>
        </div>

        <button
          class="button"
          @click="onSubmit"
        >
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import validateEmail from '../../utilities/validateEmail'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : window.location.origin

export default {
  name: 'Contact',
  data () {
    return {
      submitted: false,
      error: null,
      loading: false,
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    onSubmit () {
      this.loading = true

      if(this.submitted) return;
      if(!validateEmail(this.email)) {
        this.error = 'Invalid Email Address'
        return;
      }
      if(this.name.length === 0) {
        this.error = 'Please enter your name'
        return;
      }
      if(this.message.length === 0) {
        this.error = 'Please enter a message'
        return;
      }

      this.error = null
      axios.post(`${BASE_URL}/api/v1/submitContact`, {
        name: this.name,
        email: this.email,
        message: this.message
      }).then(() => {
        this.name = ''
        this.email = ''
        this.message = ''
        this.loading = false
        this.submitted = true
      }).catch(() => {
        this.error = 'Sorry, something has gone wrong. Please try again later.'
        this.loading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  color: #000;
  text-decoration: none;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 16px;
  border: 2px solid #000;
  margin-top: 8px;
  margin-left: 8px;
}
.button:hover {
  cursor: pointer;
  background-color: #AAA;
}
.button:focus {
  outline: none;
}

.container {
  padding-bottom: 64px;
  background-color: #ebeff2;
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

.error {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: red;
  font-size: 12px;
}

.form-container {
  width: 100%;
  max-width: 540px;
}

.input {
  margin-left: 8px;
  margin-right: 8px;
  width: calc(100% - 40px);
  font-size: 14px;
  padding: 8px;
  border-radius: 0px;
  margin-bottom: 16px;
  border-color: rgba(0, 0, 0, .22);
}
.input:focus {
  outline: 2px solid #a3b48e;
}

.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;
}

.label {
  margin-left: 8px;
}

.spacer {
  height: 48px;
}

.success {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: green;
  font-size: 12px;
}

.textarea {
  margin-left: 8px;
  margin-right: 8px;
  width: calc(100% - 40px);
  height: 96px;
  padding: 8px;
  font-family: "Montserrat", sans-serif;
  border-color: rgba(0, 0, 0, .22);
}
.textarea:focus {
  outline: 2px solid #a3b48e;
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
