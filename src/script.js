// ======== DOM ELEMENTS =========
const header = document.getElementById("site-header");
const nav = document.getElementById("desktop-nav");
const cta = document.querySelector(".cta-btn");

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// ======== COLOR SWITCH FUNCTIONS =========
const setDark = () => {
  // Desktop nav
  nav.classList.remove("text-brand-500");
  nav.classList.add("text-white");

  // CTA button
  cta.classList.remove("bg-white", "text-brand-500");
  cta.classList.add("bg-brand-500", "text-white");

  // Mobile menu
  mobileMenu.classList.remove("bg-white", "text-brand-700");
  mobileMenu.classList.add("bg-brand-500", "text-white");
};

const setLight = () => {
  // Desktop nav
  nav.classList.remove("text-white");
  nav.classList.add("text-brand-500");

  // CTA button
  cta.classList.remove("bg-brand-500", "text-white");
  cta.classList.add("bg-white", "text-brand-700");

  // Mobile menu
  mobileMenu.classList.remove("bg-brand-500", "text-white");
  mobileMenu.classList.add("bg-white", "text-brand-700");
};

// ======== DEFAULT =========
setDark(); // Assume hero section is dark by default

// ======== OBSERVER =========
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const bg = entry.target.dataset.bg;
      if (bg === "light") setLight();
      if (bg === "dark") setDark();
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll("section[data-bg]").forEach((section) => {
  observer.observe(section);
});

// ======== MOBILE MENU TOGGLE =========
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});