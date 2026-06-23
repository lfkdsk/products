/* ============================================================
   lfkdsk · 产品集  —  渲染逻辑
   读取 window.PRODUCTS，按分类渲染区块，支持搜索与主题切换。
   ============================================================ */
(function () {
  "use strict";

  var PRODUCTS = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];

  // 各分类的英文副标题（可选，用于区块右侧的小标签）
  var CATEGORY_EN = {
    "影像 & 创作": "Imaging & Creation",
    "生活 & 工具": "Life & Tools",
    "平台 & 服务": "Platform & Services",
  };

  var sectionsEl = document.getElementById("sections");
  var emptyState = document.getElementById("emptyState");
  var emptyTitle = document.getElementById("emptyTitle");
  var emptyDesc = document.getElementById("emptyDesc");
  var searchInput = document.getElementById("searchInput");
  var heroStats = document.getElementById("heroStats");

  var state = { query: "" };

  // ---- 工具函数 ----
  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 状态 -> 徽章样式类
  function statusClass(status) {
    var s = (status || "").toLowerCase();
    if (s.indexOf("live") > -1 || s.indexOf("上线") > -1) return "live";
    if (s.indexOf("beta") > -1 || s.indexOf("测试") > -1) return "beta";
    if (s.indexOf("soon") > -1 || s.indexOf("即将") > -1 || s.indexOf("敬请") > -1)
      return "soon";
    if (s.indexOf("开源") > -1 || s.indexOf("oss") > -1 || s.indexOf("open") > -1)
      return "oss";
    return ""; // 自定义状态 -> 中性徽章
  }

  // 图标：图片路径 / 字母 monogram
  function renderIcon(p) {
    if (p.icon) {
      var isPath =
        /\.(svg|png|jpe?g|gif|webp|avif|ico)$/i.test(p.icon) ||
        p.icon.indexOf("/") > -1 ||
        p.icon.indexOf("http") === 0;
      if (isPath)
        return '<img src="' + escapeHtml(p.icon) + '" alt="" loading="lazy" />';
      return escapeHtml(p.icon); // 也支持直接写 emoji
    }
    var mono = p.mono || (p.name || "?").trim().charAt(0).toUpperCase();
    return escapeHtml(mono);
  }

  // 从链接里取一个干净的展示域名
  function hostOf(link) {
    if (!link || link.charAt(0) === "#") return "";
    try {
      var u = new URL(link);
      if (u.hostname === "github.com") return "github.com";
      return u.hostname.replace(/^www\./, "");
    } catch (e) {
      return "";
    }
  }

  // ---- 渲染单张卡片 ----
  function cardHTML(p, index) {
    var tag = p.link ? "a" : "div";
    var attrs = p.link
      ? ' href="' + escapeHtml(p.link) + '"' +
        (/^https?:/.test(p.link) ? ' target="_blank" rel="noopener"' : "")
      : "";
    var style =
      "animation-delay:" + Math.min(index * 45, 400) + "ms;" +
      (p.accent ? "--accent:" + escapeHtml(p.accent) + ";" : "");

    var sc = statusClass(p.status);
    var badge = p.status
      ? '<span class="badge ' + sc + '">' + escapeHtml(p.status) + "</span>"
      : "";

    var star = p.featured ? '<span class="star">★</span>' : "";

    var desc = p.description
      ? '<p class="card-desc">' + escapeHtml(p.description) + "</p>"
      : "";

    var tags =
      p.tags && p.tags.length
        ? '<div class="card-tags">' +
          p.tags
            .map(function (t) {
              return '<span class="tag">' + escapeHtml(t) + "</span>";
            })
            .join("") +
          "</div>"
        : "";

    var host = p.linkText || hostOf(p.link);
    var footer = p.link
      ? '<div class="card-footer">' +
        '<span class="card-host">' + escapeHtml(host) + "</span>" +
        '<span class="card-go">访问' +
        ' <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span>' +
        "</div>"
      : "";

    return (
      "<" + tag + ' class="card"' + attrs + ' style="' + style + '">' +
      '<div class="card-top">' +
      '<div class="card-icon">' + renderIcon(p) + "</div>" +
      badge +
      "</div>" +
      '<h3 class="card-name">' + escapeHtml(p.name) + star + "</h3>" +
      (p.tagline ? '<p class="card-tagline">' + escapeHtml(p.tagline) + "</p>" : "") +
      desc +
      tags +
      footer +
      "</" + tag + ">"
    );
  }

  // ---- 搜索过滤 ----
  function matches(p, q) {
    if (!q) return true;
    var haystack = [p.name, p.tagline, p.description, p.category, (p.tags || []).join(" ")]
      .join(" ")
      .toLowerCase();
    return haystack.indexOf(q) > -1;
  }

  // 按 category 分组（保持首次出现顺序）
  function groupByCategory(list) {
    var order = [];
    var map = {};
    list.forEach(function (p) {
      var key = p.category || "其他";
      if (!map[key]) {
        map[key] = [];
        order.push(key);
      }
      map[key].push(p);
    });
    return order.map(function (key) {
      return { key: key, items: map[key] };
    });
  }

  function sectionHTML(group) {
    var en = CATEGORY_EN[group.key];
    var cards = group.items
      .map(function (p, i) {
        return cardHTML(p, i);
      })
      .join("");
    return (
      '<section class="section">' +
      '<div class="section-head">' +
      '<h2 class="section-title">' + escapeHtml(group.key) + "</h2>" +
      '<span class="section-count">' + group.items.length + "</span>" +
      (en ? '<span class="section-en">' + escapeHtml(en) + "</span>" : "") +
      "</div>" +
      '<div class="grid">' + cards + "</div>" +
      "</section>"
    );
  }

  // ---- 主渲染 ----
  function render() {
    if (!PRODUCTS.length) {
      sectionsEl.innerHTML = "";
      emptyState.hidden = false;
      return;
    }
    var q = state.query.trim().toLowerCase();
    var filtered = PRODUCTS.filter(function (p) {
      return matches(p, q);
    });

    if (!filtered.length) {
      sectionsEl.innerHTML = "";
      emptyTitle.textContent = "没有匹配的产品";
      emptyDesc.innerHTML = "换个关键词试试 🔍";
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    // 搜索时平铺成一个区块，否则按分类分区块
    var groups = q
      ? [{ key: "搜索结果", items: filtered }]
      : groupByCategory(filtered);
    sectionsEl.innerHTML = groups.map(sectionHTML).join("");
  }

  // ---- 顶部统计 ----
  function buildStats() {
    var total = PRODUCTS.length;
    var live = PRODUCTS.filter(function (p) {
      return statusClass(p.status) === "live";
    }).length;
    var cats = {};
    PRODUCTS.forEach(function (p) {
      if (p.category) cats[p.category] = true;
    });
    var items = [
      { n: total, label: "产品" },
      { n: live, label: "已上线" },
      { n: Object.keys(cats).length, label: "分类" },
    ];
    heroStats.innerHTML = items
      .map(function (it) {
        return (
          '<div class="hero-stat"><b>' + it.n + "</b><span>" + it.label + "</span></div>"
        );
      })
      .join("");
  }

  // ---- 主题切换 ----
  function initTheme() {
    var saved = localStorage.getItem("theme");
    var prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    var theme = saved || (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);

    document.getElementById("themeToggle").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // ---- 搜索输入 ----
  function initSearch() {
    var t;
    searchInput.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        state.query = searchInput.value;
        render();
      }, 110);
    });
  }

  // ---- 启动 ----
  function init() {
    initTheme();
    buildStats();
    initSearch();
    render();
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
