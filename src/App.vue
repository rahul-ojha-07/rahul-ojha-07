<template>
    <HeaderComponent />
    <HomeSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <FooterComponent />
</template>

<script>
import AboutSection from './components/AboutSection/AboutSection.vue';
import ContactSection from './components/ContactSection/ContactSection.vue';
import EducationSection from './components/EducationSection/EducationSection.vue';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.vue';
import FooterComponent from './components/FooterComponent/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import HomeSection from './components/HomeSection/HomeSection.vue';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.vue';



export default {
  components: {
    HeaderComponent,
    HomeSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    EducationSection,
    ContactSection,
    FooterComponent
  },
  mounted() {
    // Smooth Scrolling
    const hamburgerMenu = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');
    document.querySelectorAll('.smooth-link').forEach(link => {
            link.addEventListener('click', function (e) {
                if (this.hash !== '') {
                    e.preventDefault();
                    const hash = this.hash;

                    document.querySelector(hash).scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close the mobile menu after clicking
                    hamburgerMenu.classList.remove('active');
                    navLinks.classList.remove('open');
                }
            });
        });
  }
};

</script>

<style src="./styles/App.scss" lang="scss">




</style>
