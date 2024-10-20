<template>
    <section id="projects" class="projects-section">
        <div class="projects-content">
            <h2>Projects</h2>
            <div class="projects-container">
                <div class="project-item" v-for="(project, index) in projects" :key="index">
                    <img :src="project.image" :alt="project.title" class="project-image">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <ul class="skills-list">
                        <li v-for="(skill, index) in project.skills" :key="index">{{ skill }}</li>
                    </ul>
                    <div class="project-links">
                        <a :href="project.github" target="_blank" class="github-link">GitHub</a>
                      <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank" class="live-link">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./ProjectsSection.js"></script>

<style src="./ProjectsSection.scss" lang="scss"></style>