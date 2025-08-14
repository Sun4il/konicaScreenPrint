document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const navLinksList = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".animate-on-scroll");

    // Toggle mobile menu on hamburger click
    hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinksList.forEach(link => {
        link.addEventListener("click", function() {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Scroll animation function
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (sectionTop < screenHeight - 150) { // Adjust value for trigger point
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check on initial load
});