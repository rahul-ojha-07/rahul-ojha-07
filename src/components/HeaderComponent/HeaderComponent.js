
const themes = {
  "LightBlue": {
    '--primary-color': '#3498db',
    '--background-color': '#ecf0f1',
    '--grey-text-color': '#7f8c8d',
    '--text-color': '#2c3e50',
    '--hover-color': '#e67e22',
    '--footer-background-color': '#bdc3c7',
    '--home-background-color': 'rgba(250, 250, 250, 0.9)',
    '--button-text-color': '#ecf0f1',
    '--box-shadow-color': '#3498db1a',
    '--box-shadow-color-2': '#3498db33',
  },

  "Red": {
    '--primary-color': '#e74c3c',
    '--background-color': '#ffffff',
    '--grey-text-color': '#7f8c8d',
    '--text-color': '#34495e',
    '--hover-color': '#f39c12',
    '--footer-background-color': '#34495e',
    '--home-background-color': 'rgba(255, 255, 255, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#e74c3c1a',
    '--box-shadow-color-2': '#e74c3c33',
  },

  "OliveGreen": {
    '--primary-color': '#6b8e23',
    '--background-color': '#f5f5dc',
    '--grey-text-color': '#8b4513',
    '--text-color': '#2f4f4f',
    '--hover-color': '#d2691e',
    '--footer-background-color': '#8b4513',
    '--home-background-color': 'rgba(245, 245, 220, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#6b8e231a',
    '--box-shadow-color-2': '#6b8e2333',
  },

  "Turquoise": {
    '--primary-color': '#1abc9c',
    '--background-color': '#34495e',
    '--grey-text-color': '#95a5a6',
    '--text-color': '#ecf0f1',
    '--hover-color': '#16a085',
    '--footer-background-color': '#2c3e50',
    '--home-background-color': 'rgba(52, 73, 94, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#1abc9c1a',
    '--box-shadow-color-2': '#1abc9c33',
  },

  "BrightRed1": {
    '--primary-color': '#ff4757',
    '--background-color': '#2f3542',
    '--grey-text-color': '#dcdde1',
    '--text-color': '#ffffff',
    '--hover-color': '#ff6b81',
    '--footer-background-color': '#2c2c2e',
    '--home-background-color': 'rgba(47, 53, 66, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#ff47571a',
    '--box-shadow-color-2': '#ff475733',
  },

  "Yellow": {
    '--primary-color': '#fbc531',
    '--background-color': '#1e272e',
    '--grey-text-color': '#808e9b',
    '--text-color': '#ffffff',
    '--hover-color': '#ffb142',
    '--footer-background-color': '#2f3640',
    '--home-background-color': 'rgba(30, 39, 46, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#fbc5311a',
    '--box-shadow-color-2': '#fbc53133',
  },

  "Purple": {
    '--primary-color': '#574b90',
    '--background-color': '#1e1e2f',
    '--grey-text-color': '#a5b1c2',
    '--text-color': '#ffffff',
    '--hover-color': '#6f5b7f',
    '--footer-background-color': '#16161a',
    '--home-background-color': 'rgba(30, 30, 30, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#574b901a',
    '--box-shadow-color-2': '#574b9033',
  },

  "BrightBlue": {
    '--primary-color': '#00a8ff',
    '--background-color': '#2d3436',
    '--grey-text-color': '#b2bec3',
    '--text-color': '#ffffff',
    '--hover-color': '#0984e3',
    '--footer-background-color': '#1d1d1d',
    '--home-background-color': 'rgba(45, 52, 54, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#00a8ff1a',
    '--box-shadow-color-2': '#00a8ff33',
  },

  "LightBlue2": {
    '--primary-color': '#0984e3',
    '--background-color': '#ffffff',
    '--grey-text-color': '#b2bec3',
    '--text-color': '#2d3436',
    '--hover-color': '#00a8ff',
    '--footer-background-color': '#f1f1f1',
    '--home-background-color': 'rgba(255, 255, 255, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#0984e31a',
    '--box-shadow-color-2': '#0984e333',
  },

  "BrightRed2": {
    '--primary-color': '#e84118',
    '--background-color': '#2b2b2b',
    '--grey-text-color': '#dcdde1',
    '--text-color': '#ffffff',
    '--hover-color': '#ff3838',
    '--footer-background-color': '#353b48',
    '--home-background-color': 'rgba(43, 43, 43, 0.9)',
    '--button-text-color': '#ffffff',
    '--box-shadow-color': '#e841181a',
    '--box-shadow-color-2': '#e8411833',
  },

  "VividRed": {
    '--primary-color': '#ff3838',
    '--background-color': '#ffffff',
    '--grey-text-color': '#b2bec3',
    '--text-color': '#2b2b2b',
    '--hover-color': '#e84118',
    '--footer-background-color': '#f1f1f1',
    '--home-background-color': 'rgba(255, 255, 255, 0.9)',
    '--button-text-color': '#f1f1f1',
    '--box-shadow-color': '#ff38381a',
    '--box-shadow-color-2': '#ff383833',
  },
}
const names = Object.keys(themes);
export default {
  data() {
    return {
      isMenuOpen: false,
      currentTheme: 'LightBlue2',
      names: names
    };
  },
  methods: {
    setTheme(themeName) {
      console.log(themeName);
      if  (themeName) {
        this.currentTheme = themeName;
        const root = document.documentElement;
        const selectedTheme = themes[themeName];
        for(const [key, value] of Object.entries(selectedTheme)) {
          root.style.setProperty(key, value);
        }
        localStorage.setItem("theme", themeName)
        console.log(selectedTheme)
      } else {
        this.setTheme("LightBlue2");
      }
    }
  },
  mounted() {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      this.currentTheme = 'LightBlue2';
    }
    this.setTheme(savedTheme);

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      navLinks.classList.toggle('open');
      closeButton.innerHTML = '&times;'; // Unicode for multiplication sign (X)
    });

    // Create a close button
    const closeButton = document.createElement('div');
    closeButton.className = 'close-menu';
    navLinks.appendChild(closeButton);

    // Close menu on clicking close button
    closeButton.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      navLinks.classList.remove('open');
      closeButton.innerHTML = '';
    });

    // Smooth Scrolling for nav-links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        if (this.hash !== '') {
          e.preventDefault();
          const hash = this.hash;

          document.querySelector(hash).scrollIntoView({
            behavior: 'smooth',
          });

          // Close the mobile menu after clicking
          hamburgerMenu.classList.remove('active');
          navLinks.classList.remove('open');
        }
      });
    });

    // Smooth Scrolling for additional links
    document.querySelectorAll('.smooth-link').forEach(link => {
      link.addEventListener('click', function (e) {
        if (this.hash !== '') {
          e.preventDefault();
          const hash = this.hash;

          document.querySelector(hash).scrollIntoView({
            behavior: 'smooth',
          });

          // Close the mobile menu after clicking
          hamburgerMenu.classList.remove('active');
          navLinks.classList.remove('open');
        }
      });
    });

    // Change Navbar Background on Scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Add bounce effect on hover
    document.querySelectorAll('a').forEach(item => {
      item.addEventListener('mouseenter', function () {
        item.classList.add('fa-bounce');
      });
      item.addEventListener('mouseleave', function () {
        item.classList.remove('fa-bounce');
      });
    });
  },

};
