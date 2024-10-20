<template>
  <section id="contact" class="contact-section">
    <div class="contact-content">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to connect, feel free to reach out!</p>
      <form class="contact-form" @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required placeholder="Your Name">
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required placeholder="Your Email">
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" rows="5" required placeholder="Your Message"></textarea>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
<!--      <div class="social-links">-->
<!--        <h3>Connect with me:</h3>-->
<!--        <a href="https://github.com/rahul-ojha-07" target="_blank"><i class="fab fa-github"></i>GitHub</a>-->
<!--        <a href="https://www.linkedin.com/in/rahulojha07" target="_blank"><i class="fab fa-linkedin-in"></i>LinkedIn</a>-->
<!--        <a href="https://x.com/rahul_ojha_07" target="_blank"><i class="fab fa-x-twitter"></i> Twitter</a>-->
<!--        <a href="https://www.facebook.com/rahul.ojha.07" target="_blank"><i class="fab fa-facebook"></i>Facebook</a>-->
<!--        <a href="https://medium.com/@rahul-ojha-07" target="_blank"><i class="fab fa-medium"></i> Medium</a>-->
<!--        <a href="https://stackoverflow.com/users/8400785/rahul-ojha-07" target="_blank"><i class="fab fa-stack-overflow"></i> Stack Overflow</a>-->
<!--        <a href="https://www.instagram.com/rahul_ojha_07/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>-->
<!--      </div>-->
      <div v-if="messageSent" class="popup">Message sent successfully!</div>
    </div>
  </section>
</template>

<script src="./ContactSection.js">

</script>

<style src="./ContactSection.scss" lang="scss"></style>
