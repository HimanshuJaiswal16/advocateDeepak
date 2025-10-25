let isScrolled = false;

function handleScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 50 && !isScrolled) {
    header.classList.add("scrolled");
    isScrolled = true;
  } else if (window.scrollY <= 50 && isScrolled) {
    header.classList.remove("scrolled");
    isScrolled = false;
  }
}

// Run once on load (in case page is refreshed mid-scroll)
document.addEventListener("DOMContentLoaded", handleScroll);

// Then keep listening for scroll events
window.addEventListener("scroll", handleScroll);


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

let learnMore = document.querySelector('.learnMore');
let criminalDefense = document.querySelector('.criminalDefense');
let civilLitigation = document.querySelector('.civilLitigation');
let familyLaw = document.querySelector('.familyLaw');
let customerProtection = document.querySelector('.customerProtection');
let legalDrafting = document.querySelector('.legalDrafting');
let deedRegistration = document.querySelector('.deedRegistration');
let learnmore_box = document.querySelector('.learnmore-box');

learnMore.addEventListener('click', () => {
  learnmore_box.style.display = 'none';
  criminalDefense.style.marginTop = 0;
  civilLitigation.style.marginTop = 0;
  familyLaw.style.marginTop = 0;
  customerProtection.style.display = 'block';
  legalDrafting.style.display = 'block';
  deedRegistration.style.display = 'block';
})

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
const positions = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5'];

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

// Auto-rotation
// setInterval(rotateCarouselForward, 4000);


document.addEventListener("DOMContentLoaded", function () {
  // Initialize map
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([77.1372, 28.6196]),
      zoom: 15,
    }),
  });

  // Create a marker feature at the given coordinates
  const marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([77.1372, 28.6196])),
  });

  // Marker style (red pin)
  marker.setStyle(
    new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // pin icon
        scale: 0.07, // adjust size
      }),
    })
  );

  // Vector layer for marker
  const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [marker],
    }),
  });

  map.addLayer(vectorLayer);
});

// footer
let date = new Date();
let currentYear = date.getFullYear();

let footerElement = document.querySelector('.footer-brand p');
footerElement.innerHTML = `©${currentYear} Adv Deepak Tanwar, Inc.`;