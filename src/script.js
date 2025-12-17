const header = document.getElementById("site-header");
const nav = document.getElementById("desktop-nav");
const cta = document.querySelector(".cta-btn");

const setDark = () => {
  nav.classList.remove("text-brand-500");
  nav.classList.add("text-white");

  cta.classList.remove("bg-white", "text-brand-500");
  cta.classList.add("bg-brand-500", "text-white");
};

const setLight = () => {
  nav.classList.remove("text-white");
  nav.classList.add("text-brand-500");

  cta.classList.remove("bg-brand-500", "text-white");
  cta.classList.add("bg-white", "text-brand-500");
};

// Default (hero is dark)
setDark();

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
