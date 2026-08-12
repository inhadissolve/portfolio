(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Theme toggle ---------------- */
  var THEME_KEY = "portfolio-theme";
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }
  function getPreferredTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(getPreferredTheme());

  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  function closeNav() {
    if (!navLinks) return;
    navLinks.classList.remove("open");
    navToggle && navToggle.classList.remove("open");
    navToggle && navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  /* ---------------- Header scrolled state + active nav link ---------------- */
  var nav = document.getElementById("nav");
  var toTopBtn = document.getElementById("toTop");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[data-nav]'));
  var dotLinks = Array.prototype.slice.call(document.querySelectorAll(".section-dots .dot-link"));
  var dotsFill = document.getElementById("dotsFill");

  function setActiveLink() {
    if (!sections.length) return;
    var probe = (nav ? nav.offsetHeight : 72) + 32;
    var currentId = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top - probe <= 0) {
        currentId = sections[i].id;
      }
    }
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", currentId !== null && a.getAttribute("href") === "#" + currentId);
    });

    if (dotLinks.length) {
      var activeIndex = -1;
      dotLinks.forEach(function (a, i) {
        var isActive = currentId !== null && a.getAttribute("href") === "#" + currentId;
        a.classList.toggle("active", isActive);
        if (isActive) activeIndex = i;
      });
      if (dotsFill) {
        var pct = activeIndex < 0 ? 0 : (activeIndex / (dotLinks.length - 1)) * 100;
        dotsFill.style.height = pct + "%";
      }
    }
  }

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("scrolled", y > 8);
    if (toTopBtn) toTopBtn.classList.toggle("visible", y > 500);
    setActiveLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", setActiveLink);
  onScroll();

  if (toTopBtn) {
    toTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("in-view"); });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
