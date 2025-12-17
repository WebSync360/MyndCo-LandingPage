  const header = document.getElementById("site-header");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const desktopNav = document.getElementById("desktop-nav");
  const ctaBtn = header.querySelector(".cta-btn");

  let lastScrollY = window.scrollY;

  /* ===============================
     HEADER HIDE / SHOW
  =============================== */
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 80) {
      header.classList.add("-translate-y-full");
    } else {
      header.classList.remove("-translate-y-full");
    }

    lastScrollY = currentScroll;
  });

  /* ===============================
     MOBILE MENU
  =============================== */
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  /* ===============================
     COLOR MODE SWITCH (TAILWIND)
  =============================== */
  const setDarkMode = () => {
    desktopNav.classList.remove("text-brand-500");
    desktopNav.classList.add("text-white/80");

    ctaBtn.classList.remove("bg-brand-500", "text-white");
    ctaBtn.classList.add("bg-white", "text-brand-500");
  };

  const setLightMode = () => {
    desktopNav.classList.remove("text-white/80");
    desktopNav.classList.add("text-brand-500");

    ctaBtn.classList.remove("bg-white", "text-brand-500");
    ctaBtn.classList.add("bg-brand-500", "text-white");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dataset.bg === "light"
            ? setLightMode()
            : setDarkMode();
        }
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll("[data-bg]").forEach(section => {
    observer.observe(section);
  });