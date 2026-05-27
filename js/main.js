(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menu = document.querySelector("[data-menu]");
  var openButton = document.querySelector("[data-menu-open]");
  var closeButton = document.querySelector("[data-menu-close]");
  var lastFocused = null;

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    if (openButton) openButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    if (open) {
      lastFocused = document.activeElement;
      closeButton.focus();
    } else if (lastFocused) {
      lastFocused.focus();
    }
  }

  function trapMenuFocus(event) {
    if (!menu || !menu.classList.contains("is-open") || event.key !== "Tab") return;
    var controls = menu.querySelectorAll("a[href], button:not([disabled])");
    if (!controls.length) return;
    var first = controls[0];
    var last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function markCurrentNavigation() {
    var file = window.location.pathname.split("/").pop() || "index.html";
    if (file === "product-detail.html") file = "products.html";
    if (file === "news-detail.html") file = "news.html";
    document.querySelectorAll("[data-page]").forEach(function (link) {
      if (link.getAttribute("data-page") === file) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    items.forEach(function (item) { observer.observe(item); });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
        var target = document.querySelector(anchor.hash);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  window.showDemoToast = function (message) {
    var toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toast.hideTimer);
    toast.hideTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 4300);
  };

  if (openButton) openButton.addEventListener("click", function () { setMenu(true); });
  if (closeButton) closeButton.addEventListener("click", function () { setMenu(false); });
  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target === menu) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menu.classList.contains("is-open")) setMenu(false);
    trapMenuFocus(event);
  });
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("[data-year]").forEach(function (item) {
    item.textContent = new Date().getFullYear();
  });

  updateHeader();
  if (openButton) openButton.setAttribute("aria-expanded", "false");
  markCurrentNavigation();
  initReveal();
  initSmoothAnchors();
})();
