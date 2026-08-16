(() => {
  const body = document.body;
  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      body.classList.toggle("menu-open", open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
      });
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const publicationEntries = document.querySelectorAll("[data-type]");
  if (filterButtons.length && publicationEntries.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        publicationEntries.forEach((entry) => {
          entry.hidden = filter !== "all" && entry.dataset.type !== filter;
        });
      });
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  if (window.lucide) window.lucide.createIcons();
})();
