let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const carousel = document.querySelector('.carousel');
    const newTransform = `translateX(-${currentSlide * 100}%)`;

    if (currentSlide === 0 && index === totalSlides - 1) {
        carousel.style.transition = 'none';
        setTimeout(() => {
            carousel.style.transition = '';
            carousel.style.transform = newTransform;
        }, 50);
    } else {
        carousel.style.transition = '';
        carousel.style.transform = newTransform;
    }
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

showSlide(currentSlide);

function initModal() {
    const modal = document.getElementById("signupModal");
    const signUpButtons = document.querySelectorAll("a[href='#cta']");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("signupForm"); 
    const notification = document.createElement("div"); 
    
    notification.classList.add("notification");
    document.body.appendChild(notification); 

    // Loop through all matching links and add event listener
    signUpButtons.forEach(function (signUpButton) {
        signUpButton.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "flex";
        });
    });

    // Close modal when "X" button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal if clicked outside of modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Hide the modal
        modal.style.display = "none";

        // Show the success notification
        notification.textContent = "Signup Successful!";
        notification.classList.add("show");

        // Hide the notification after 3 seconds
        setTimeout(function () {
            notification.classList.remove("show");
        }, 3000);
    });
}

// Initialize the modal functionality
initModal();

function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('header nav ul li a');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        overlay.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
        hamburger.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function () {
        navMenu.classList.remove('active');
        overlay.style.display = 'none';
        hamburger.classList.remove('active');
    });

    overlay.addEventListener('click', function () {
        navMenu.classList.remove('active');
        overlay.style.display = 'none';
        hamburger.classList.remove('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            overlay.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}

initHamburger();
