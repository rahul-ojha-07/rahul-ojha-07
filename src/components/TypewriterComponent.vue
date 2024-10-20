<template>
  <div class="typewriter">
    <h1> I am {{ currentText }}|</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textArray: [
        "Software Engineer","Java Developer", "Back-end Engineer"
      ],
      currentIndex: 0,
      currentText: "",
      isDeleting: false,
      speed: 50, // typing speed in milliseconds
    };
  },
  methods: {
    type() {
      const fullText = this.textArray[this.currentIndex] + "";

      if (this.isDeleting) {
        this.currentText = fullText.substring(0, this.currentText.length - 1);
      } else {
        this.currentText = fullText.substring(0, this.currentText.length + 1);
      }
      this.speed  = 50;
      if (!this.isDeleting && this.currentText === fullText) {
        // Pause before deleting
        this.speed = 1000; // pause for a second
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentText === "") {
        // Move to the next text
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length; // loop through texts
      }

      setTimeout(() => this.type(), this.speed);
    },
  },
  mounted() {
    this.type(); // Start the typing effect
  },
};
</script>

<style scoped>



</style>
