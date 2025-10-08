let isScrolled = false;

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50 && !isScrolled) {
    header.classList.add("scrolled");
    isScrolled = true;
  } else if (window.scrollY <= 50 && isScrolled) {
    header.classList.remove("scrolled");
    isScrolled = false;
  }
});

// ===== Animate elements on scroll =====
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animation = el.dataset.animate;

        // Add Animate.css classes
        el.classList.add("animate__animated", animation);
        el.style.visibility = "visible";

        // Stop observing once animated
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.5 // 50% of element in view triggers animation
  });

  // Target all elements that should animate
  document.querySelectorAll("[data-animate]").forEach(el => {
    el.style.visibility = "hidden";
    observer.observe(el);
  });
});

// services
document.addEventListener("DOMContentLoaded", () => {
  const supportSection = document.querySelector("#services");
  if (!supportSection) return;

  const supportCards = supportSection.querySelectorAll(".service");

  // Hide all cards initially
  supportCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start after a small delay (e.g., 400ms)
        const baseDelay = 400;

        supportCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, baseDelay + index * 400); // 400ms between each
        });

        observer.unobserve(supportSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(supportSection);
});

// ===== Sequential animation for "Support" section cards (with delay before first) =====
document.addEventListener("DOMContentLoaded", () => {
  const supportSection = document.querySelector("#support");
  if (!supportSection) return;

  const supportCards = supportSection.querySelectorAll(".expert-card");

  // Hide all cards initially
  supportCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start after a small delay (e.g., 400ms)
        const baseDelay = 400;

        supportCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, baseDelay + index * 400); // 400ms between each
        });

        observer.unobserve(supportSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(supportSection);
});


// FAQ toggle
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});

// review
const cards = document.querySelectorAll('.carousel-card');
const positions = ['pos1','pos2','pos3','pos4','pos5'];

cards.forEach((card, i) => card.classList.add(positions[i]));

function rotateCarouselForward() {
  cards.forEach(card => {
    let currentPos = positions.findIndex(pos => card.classList.contains(pos));
    card.classList.remove(positions[currentPos]);
    let nextPos = (currentPos + 1) % positions.length;
    card.classList.add(positions[nextPos]);
  });
}

function rotateCarouselBackward() {
  cards.forEach(card => {
    let currentPos = positions.findIndex(pos => card.classList.contains(pos));
    card.classList.remove(positions[currentPos]);
    let nextPos = (currentPos - 1 + positions.length) % positions.length;
    card.classList.add(positions[nextPos]);
  });
}

document.querySelector('.next').addEventListener('click', rotateCarouselForward);
document.querySelector('.prev').addEventListener('click', rotateCarouselBackward);
