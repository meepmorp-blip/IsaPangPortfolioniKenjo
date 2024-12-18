// Function to toggle the menu open/closed
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Function to close the menu if it is open and the user scrolls
function closeMenuOnScroll() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active'); // Close the menu if it's open
    }
}

// Add the scroll event listener to the window to close the menu when scrolling
window.addEventListener('scroll', closeMenuOnScroll);

// Function to show a specific section and hide others
function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}


document.addEventListener('scroll', function () {
    const introSection = document.querySelector('#intro');
    if (window.scrollY > window.innerHeight * 0.5) { // Adjust as needed
        introSection.style.opacity = '0';
        introSection.style.transition = 'opacity 0.5s ease';
    } else {
        introSection.style.opacity = '1';
    }
});

// Add a scroll event listener to detect when the user scrolls
window.addEventListener('scroll', () => {
    const introSection = document.querySelector('#intro');
    const aboutSection = document.querySelector('#about');

    // When the user scrolls past 80% of the first section, fade in "About Me"
    if (window.scrollY > window.innerHeight * 0.8) {
        introSection.classList.add('hidden');
        aboutSection.style.opacity = '1'; // Fade in About section
        aboutSection.style.zIndex = '1'; // Bring About section above intro
    } else {
        introSection.classList.remove('hidden');
        aboutSection.style.opacity = '0'; // Hide About section again
        aboutSection.style.zIndex = '-1'; // Keep About section below intro
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");

    const handleScroll = () => {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
            aboutSection.classList.add("in-view");
        } else {
            aboutSection.classList.remove("in-view");
        }
    };

    window.addEventListener("scroll", handleScroll);
});

// Intersection Observer setup
const aboutSection = document.getElementById('about');
const getToKnowMeText = document.getElementById('get-to-know-me');
const aboutText = document.querySelector('.about-text');

const options = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.5 // Trigger when half of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade In "Get to Know Me" and "About Text"
            getToKnowMeText.style.opacity = '0.3';  // Make "Get to Know Me" less prominent
            getToKnowMeText.style.transform = 'scale(1.2) translateY(-20px)';  // Shrink and move slightly up
            
            aboutText.style.opacity = '1';  // Full opacity for "About Text"
            aboutText.style.transform = 'translateY(0)';  // Move to normal position
        } else {
            // Fade Out "Get to Know Me" and "About Text"
            getToKnowMeText.style.opacity = '0';  // "Get to Know Me" fades out completely
            getToKnowMeText.style.transform = 'scale(1.5) translateY(-40px)';  // Move more up and shrink further
            
            aboutText.style.opacity = '0';  // "About Text" fades out
            aboutText.style.transform = 'translateY(50px)';  // Move out of view
        }
    });
}, options);

// Start observing the "about" section
observer.observe(aboutSection);

// Detect when project comes into view
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Add 'visible' class when the element is in the viewport
    function checkVisibility() {
        projects.forEach(project => {
            if (isInViewport(project)) {
                project.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});

// Detect when project comes into view
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Add 'visible' class when the element is in the viewport
    function checkVisibility() {
        projects.forEach(project => {
            if (isInViewport(project)) {
                project.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});
document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item");

    // IntersectionObserver to detect when projects enter the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add visible class when in viewport
            }
        });
    }, { threshold: 0.5 });

    projectItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add visible class when in viewport
            } else {
                entry.target.classList.remove("visible"); // Remove visible class when out of viewport
            }
        });
    }, { threshold: 0.5 });

    // Observe each project item
    projectItems.forEach(item => {
        observer.observe(item);
    });
});

// Function to handle the image carousel loop
document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const carouselImages = document.querySelectorAll('.carousel-image');
    const totalImages = carouselImages.length;

    // Function to move the carousel images
    function moveCarousel() {
        index++;
        if (index >= totalImages) {
            index = 0; // Reset to first image when reaching the end
        }

        const carousel = document.querySelector('.carousel');
        const offset = -index * 100; // Move carousel images by 100% per click
        carousel.style.transform = `translateX(${offset}%)`;  // Adjust the position of images
    }

    // Set an interval to automatically move the carousel every 3 seconds
    setInterval(moveCarousel, 3000);
});

let lastScrollTop = 0; // Store the last scroll position
const servicesSection = document.getElementById('services');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // User is scrolling down: Apply the flip-out effect
        servicesSection.classList.remove('flip-in');
        servicesSection.classList.add('flip-out');
    } else {
        // User is scrolling up: Apply the flip-in effect
        servicesSection.classList.remove('flip-out');
        servicesSection.classList.add('flip-in');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});

document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.querySelector(".services-container");
    const serviceItems = document.querySelectorAll(".service-item");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'visible' class when entering the viewport
            entry.target.classList.add("visible");
  
            // Animate service items with staggered effect
            if (entry.target === servicesContainer) {
              serviceItems.forEach((item, index) => {
                setTimeout(() => item.classList.add("visible"), index * 200);
              });
            }
          } else {
            // Remove the 'visible' class when leaving the viewport
            entry.target.classList.remove("visible");
  
            // Reset service items' visibility
            if (entry.target === servicesContainer) {
              serviceItems.forEach((item) => item.classList.remove("visible"));
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );
  
    // Observe the container
    observer.observe(servicesContainer);
  });
  
  