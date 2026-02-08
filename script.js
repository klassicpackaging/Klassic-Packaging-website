(function () {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const tabs = document.querySelectorAll(".tab");
  const panels = {
    cups: document.getElementById("tab-cups"),
    lunchboxes: document.getElementById("tab-lunchboxes"),
    soupbowls: document.getElementById("tab-soupbowls"),
  };

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });

    // Close menu when clicking a link
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // Tabs
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const key = btn.dataset.tab;
      Object.values(panels).forEach(p => p.classList.remove("active"));
      if (panels[key]) panels[key].classList.add("active");
    });
  });
})();
