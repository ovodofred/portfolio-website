document.addEventListener("DOMContentLoaded", function () {
    // Photo Slideshow
    const slides = document.querySelectorAll(".slideshow-photo");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, 3000); // Change every 3 seconds

    // Skills Progress Animation
    const progressBars = document.querySelectorAll(".progress");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const skillValue = progress.getAttribute("data-skill");
                    progress.style.width = `${skillValue}%`;
                }
            });
        },
        { threshold: 0.5 }
    );

    progressBars.forEach((progressBar) => {
        observer.observe(progressBar);
    });
});
