/* ============================================================
   lfkdsk · 产品集 — 渲染逻辑
   读 window.PRODUCTS，按分类排成一列列的行。
   ============================================================ */
(function () {
  "use strict";

  var PRODUCTS = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];

  // 分区标题右边那行英文（可选，不加也能正常显示）
  var CATEGORY_EN = {
    "影像 & 创作": "Imaging & Creation",
    "生活 & 工具": "Life & Tools",
    "平台 & 服务": "Platform & Services",
  };

  var sectionsEl = document.getElementById("sections");
  var emptyState = document.getElementById("emptyState");
  var introMeta = document.getElementById("introMeta");

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 状态 -> live / beta / soon / oss
  function statusKind(status) {
    var s = (status || "").toLowerCase();
    if (s.indexOf("live") > -1 || s.indexOf("上线") > -1) return "live";
    if (s.indexOf("beta") > -1 || s.indexOf("测试") > -1) return "beta";
    if (s.indexOf("soon") > -1 || s.indexOf("即将") > -1) return "soon";
    if (s.indexOf("开源") > -1 || s.indexOf("oss") > -1 || s.indexOf("open") > -1)
      return "oss";
    return "";
  }

  // 从链接里取一个干净的展示域名
  function hostOf(link) {
    if (!link || link.charAt(0) === "#") return "";
    try {
      var u = new URL(link);
      if (u.hostname === "github.com") return "github.com" + u.pathname;
      return u.hostname.replace(/^www\./, "") + (u.pathname === "/" ? "" : u.pathname);
    } catch (e) {
      return "";
    }
  }

  function rowHTML(p) {
    var tag = p.link ? "a" : "div";
    var attrs = p.link
      ? ' href="' +
        escapeHtml(p.link) +
        '"' +
        (/^https?:/.test(p.link) ? ' target="_blank" rel="noopener"' : "")
      : "";

    var status = p.status
      ? '<span class="row-status ' +
        statusKind(p.status) +
        '">' +
        escapeHtml(p.status) +
        "</span>"
      : "";

    // 优先展示真实路径（github.com/lfkdsk/Plate 比 "GitHub" 有信息量），
    // linkText 只在链接解析不出域名时兜底。
    var host = hostOf(p.link) || p.linkText;

    // 标签排成一行普通文字，不做成胶囊。
    var tags =
      p.tags && p.tags.length
        ? p.tags.map(escapeHtml).join(" &middot; ")
        : "";

    return (
      "<" + tag + ' class="row"' + attrs + ">" +
      '<div class="row-top">' +
      '<h3 class="row-name">' + escapeHtml(p.name) + "</h3>" +
      status +
      "</div>" +
      (p.tagline
        ? '<p class="row-tagline">' + escapeHtml(p.tagline) + "</p>"
        : "") +
      (p.description
        ? '<p class="row-desc">' + escapeHtml(p.description) + "</p>"
        : "") +
      (host || tags
        ? '<div class="row-foot">' +
          (host
            ? '<span class="row-host">' +
              escapeHtml(host) +
              ' <span class="arrow">&#8599;</span></span>'
            : "") +
          (tags ? '<span class="row-tags">' + tags + "</span>" : "") +
          "</div>"
        : "") +
      "</" + tag + ">"
    );
  }

  // 按 category 分组，保持首次出现的顺序
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
    return (
      '<section class="section">' +
      '<div class="section-head">' +
      '<h2 class="section-title">' + escapeHtml(group.key) + "</h2>" +
      (en ? '<span class="section-en">' + escapeHtml(en) + "</span>" : "") +
      "</div>" +
      '<div class="rows">' + group.items.map(rowHTML).join("") + "</div>" +
      "</section>"
    );
  }

  // 开场白下面那行小字：一句话把家底交代清楚，而不是三个统计块
  function buildIntroMeta() {
    var n = { live: 0, oss: 0, beta: 0, soon: 0 };
    PRODUCTS.forEach(function (p) {
      var k = statusKind(p.status);
      if (k in n) n[k]++;
    });
    var parts = [PRODUCTS.length + " 个项目"];
    if (n.live) parts.push(n.live + " 个跑在线上");
    if (n.oss) parts.push(n.oss + " 个开源");
    if (n.beta) parts.push(n.beta + " 个还在 Beta");
    if (n.soon) parts.push(n.soon + " 个还没出来");
    introMeta.textContent = parts.join(" · ");
  }

  function render() {
    if (!PRODUCTS.length) {
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;
    sectionsEl.innerHTML = groupByCategory(PRODUCTS).map(sectionHTML).join("");
    buildIntroMeta();
  }

  function initTheme() {
    document.getElementById("themeToggle").addEventListener("click", function () {
      var next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  initTheme();
  render();
})();
