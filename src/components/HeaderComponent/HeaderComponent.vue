<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <a href="#home" class="smooth-link">Rahul</a>
      </div>
      <div class="hamburger-menu" id="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-links" id="nav-links">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#education" class="nav-link">Education</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
        <li><div class="name-selector">
          <select id="name-selector"  @change="setTheme($event.target.value)" v-model="currentTheme">
            <option v-for="(name, index) in names" :key="index" :value="name">{{ name }}</option>
          </select>
        </div></li>
      </ul>
    </nav>
  </header>
</template>

<script src="./HeaderComponent.js">
</script>

<style src="./HeaderComponent.scss" lang="scss"></style>
