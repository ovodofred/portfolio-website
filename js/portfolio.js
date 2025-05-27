// JavaScript for Portfolio Filter
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Show or hide portfolio items with animation
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    item.style.opacity = 0;
                    setTimeout(() => (item.style.opacity = 1), 100);
                } else {
                    item.style.opacity = 0;
                    setTimeout(() => (item.style.display = 'none'), 300);
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
  
    const closeButton = document.createElement("span");
    closeButton.classList.add("lightbox-close");
    closeButton.innerHTML = "&times;";
    lightbox.appendChild(closeButton);
  
    const img = document.createElement("img");
    lightbox.appendChild(img);
  
    document.querySelectorAll('[data-lightbox="portfolio"]').forEach(item => {
      item.addEventListener("click", event => {
        event.preventDefault();
        img.src = item.href;
        lightbox.classList.add("active");
      });
    });
  
    closeButton.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  
    lightbox.addEventListener("click", event => {
      if (event.target === lightbox || event.target === closeButton) {
        lightbox.classList.remove("active");
      }
    });
  });


  // Transitions
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    // Function to filter items
    const filterItems = (filter) => {
        portfolioItems.forEach((item) => {
            item.classList.remove("show", "fade-in", "slide-in", "zoom-in");
            if (filter === "all" || item.classList.contains(filter)) {
                const effects = ["fade-in", "slide-in", "zoom-in"];
                const randomEffect = effects[Math.floor(Math.random() * effects.length)];
                setTimeout(() => {
                    item.classList.add("show", randomEffect);
                }, 100); // Slight delay for smooth transition
            }
        });
    };

    // Initialize "All" category on page load
    filterItems("all");

    // Event listener for filter buttons
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Update active button
            filterButtons.forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");

            // Apply filter
            const filter = btn.getAttribute("data-filter");
            filterItems(filter);
        });
    });
});
  