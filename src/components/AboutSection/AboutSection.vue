<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <h2>About Me</h2>
      <p>
        I am a passionate Software Engineer with over 4 years of experience in backend development.
        My journey began with a fascination for problem-solving and coding. I specialize in Java, Spring Boot, and various database technologies, continuously striving to learn and adapt to new challenges.
      </p>
      <p>
        As an experienced <b>Software Engineer / Java Developer / Back-end Engineer</b>, I have a strong track record of designing and implementing scalable and efficient solutions. I am proficient in coding, debugging, and optimizing backend systems for seamless application functionality.
      </p>

      <h3>Skills</h3>
      <ul class="skills-list">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>

      <h3>Contact Me</h3>
      <p>
        If you'd like to get in touch, feel free to reach out via the <a href="#contact" class="contact-link smooth-link">Contact</a> section.
      </p>
    </div>
  </section>
</template>

<script src="./AboutSection.js"></script>

<style src="./AboutSection.scss" lang="scss"></style>