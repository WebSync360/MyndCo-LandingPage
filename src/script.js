  const header = document.getElementById("site-header");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  let lastScrollY = window.scrollY;

  /* ===============================
     HEADER HIDE / SHOW ON SCROLL
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
     MOBILE MENU TOGGLE
  =============================== */
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  /* ===============================
     AUTO COLOR SWITCH (SMART)
  =============================== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.bg === "light") {
            header.classList.remove("header-dark");
            header.classList.add("header-light");
          } else {
            header.classList.remove("header-light");
            header.classList.add("header-dark");
          }
        }
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll("[data-bg]").forEach(section => {
    observer.observe(section);
  });