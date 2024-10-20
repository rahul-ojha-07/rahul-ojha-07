<template>
    <section id="experience" class="experience-section">
        <div class="experience-content">
            <h2>Experience</h2>
            <div class="experience-item" v-for="(job, index) in experiences" :key="index">
                <div class="experience-content-wrapper">
                    <div class="experience-icon"><i class="fas fa-briefcase"></i></div>
                    <div class="experience-details">
                        <h4>{{ job.company }}, {{ job.location }}</h4>
                        <p class="date">{{ job.date }}</p>
                        <p>{{ job.description }}</p>
                        <ul class="achievements">
                            <li v-for="(achievement, index) in job.achievements" :key="index">{{ achievement }}</li>
                        </ul>
                        <div class="skills">
                            <span class="skill" v-for="(skill, index) in job.skills" :key="index">{{ skill }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script src="./ExperienceSection.js"></script>

<style src="./ExperienceSection.scss" lang="scss"></style>