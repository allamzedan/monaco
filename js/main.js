document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  if (!navToggle || !mobileMenu) {
    return;
  }

  const setMenuState = (isOpen) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.hidden = !isOpen;
  };

  setMenuState(false);

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
    }
  });
});