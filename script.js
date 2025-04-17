// Scroll animation
const faders = document.querySelectorAll('.fade-section');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

faders.forEach(section => {
  appearOnScroll.observe(section);
});

window.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("intro-heading");
    const para = document.getElementById("intro-para");
    const traits = document.querySelectorAll(".trait");
  
    // Fade in heading first
    setTimeout(() => {
      heading.classList.add("show");
    }, 300); // small delay after load
  
    // Fade in paragraph second
    setTimeout(() => {
      para.classList.add("show");
    }, 1200); // after heading
  
    // Animate traits one-by-one
    traits.forEach((trait, i) => {
      setTimeout(() => {
        trait.classList.add("show");
      }, 2000 + i * 600); // stagger traits
    });
  });
  