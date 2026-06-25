document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initSearch();
  initNoticeBoard();
  initBackToTop();
  initFadeCards();
});

function initNavigation() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".nav-menu a");
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.querySelector(".nav-menu");

  navLinks.forEach(function (link) {
    var hrefPage = link.getAttribute("href").split("/").pop();
    if (hrefPage === currentPage) {
      link.classList.add("active");
    }
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

function initSearch() {
  var input = document.querySelector("[data-search-input]");
  if (!input) return;

  var targetSelector = input.getAttribute("data-search-target");
  var cards = Array.prototype.slice.call(document.querySelectorAll(targetSelector));
  var count = document.querySelector("[data-result-count]");

  function updateResults() {
    var keyword = input.value.trim().toLowerCase();
    var visibleCount = 0;

    cards.forEach(function (card) {
      var text = (card.textContent + " " + (card.dataset.keywords || "")).toLowerCase();
      var matched = !keyword || text.indexOf(keyword) !== -1;
      card.classList.toggle("is-hidden", !matched);
      if (matched) visibleCount += 1;
    });

    if (count) {
      // 保留 HTML 中预设的 "共 X 项资源" / "共 X 项实验" 格式
      var prefix = "当前显示 ";
      var suffix = " 项";
      // 从原始 HTML 提取后缀词（如 "资源"、"实验"）
      var origText = count.getAttribute("data-orig") || count.textContent;
      var match = origText.match(/\d+\s*项(.+)/);
      if (match) suffix = " 项" + match[1];
      count.textContent = prefix + visibleCount + suffix;
    }
  }

  input.addEventListener("input", updateResults);
  updateResults();
}

function initNoticeBoard() {
  var board = document.querySelector("[data-notice-board]");
  if (!board) return;

  var items = Array.prototype.slice.call(board.querySelectorAll(".notice-item"));
  var dots = Array.prototype.slice.call(board.querySelectorAll(".notice-dot"));
  var currentIndex = 0;

  function showNotice(index) {
    currentIndex = index;
    items.forEach(function (item, itemIndex) {
      item.classList.toggle("active", itemIndex === index);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showNotice(index);
    });
  });

  var timer = window.setInterval(function () {
    showNotice((currentIndex + 1) % items.length);
  }, 4200);

  // 鼠标悬停时暂停自动轮播（WCAG 2.2 要求自动内容有暂停机制）
  board.addEventListener("mouseenter", function () {
    window.clearInterval(timer);
  });
  board.addEventListener("mouseleave", function () {
    timer = window.setInterval(function () {
      showNotice((currentIndex + 1) % items.length);
    }, 4200);
  });
}

function initBackToTop() {
  var button = document.querySelector(".back-to-top");
  if (!button) return;

  window.addEventListener("scroll", function () {
    button.classList.toggle("show", window.scrollY > 360);
  });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initFadeCards() {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".fade-card"));
  if (!cards.length) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach(function (card) {
      card.classList.add("visible");
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(function (card) {
    observer.observe(card);
  });
}

// 赵家国负责：交互脚本确认
