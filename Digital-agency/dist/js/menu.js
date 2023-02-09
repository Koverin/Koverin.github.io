"use strict";

(function () {
  var mobileMenu = document.querySelector(".js-menu-container");
  var openMenuBtn = document.querySelector(".js-open-menu");
  var closeMenuBtn = document.querySelector(".js-close-menu");

  var toggleMenu = function toggleMenu() {
    var isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    var scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu); // Close the mobile menu on wider screens if the device orientation changes

  window.matchMedia("(<desktop)").addEventListener("change", function (e) {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
//# sourceMappingURL=menu.js.map
