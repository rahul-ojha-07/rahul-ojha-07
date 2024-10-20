<template>
  <section id="education" class="education-section">
    <div class="education-content">
      <h2>education</h2>
      <div class="education-item" v-for="(school, index) in educations" :key="index">
        <div class="education-content-wrapper">
          <div class="education-icon"><i class="fas fa-graduation-cap"></i></div>
          <div class="education-details">
            <h4>{{ school.school }}, {{ school.location }}</h4>
            <p class="duration">{{ school.duration }}</p>
            <p><strong>{{ school.course }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
  

<script src="./EducationSection.js"></script>
  
  <style src="./EducationSection.scss" lang="scss"></style>
  