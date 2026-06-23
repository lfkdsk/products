/**
 * 产品数据 / Product data
 * ────────────────────────────────────────────────────────────
 * 每次新增一个产品，就往下面的数组里加一个对象即可。
 * To add a product, append one object to the array below.
 *
 * 字段说明 / Fields:
 *   name        必填  产品名称
 *   tagline     必填  一句话简介
 *   description 选填  详细描述
 *   category    选填  分组名称，相同 category 的产品会归到同一区块
 *   mono        选填  图标字母（不填则自动取名称首字母）
 *   icon        选填  图片图标路径（assets/icons/xxx.svg）；填了则覆盖字母图标
 *   accent      选填  主题色，例如 "#8b5cf6"（影响图标、悬停、链接配色）
 *   status      选填  状态徽章："Live" | "Beta" | "Coming Soon" | "开源" | 自定义
 *   tags        选填  标签数组，例如 ["Markdown", "编辑器"]
 *   link        选填  跳转链接（卡片整体可点）
 *   linkText    选填  链接文案（不填则显示域名）
 *   featured    选填  true 时高亮为旗舰产品
 * ────────────────────────────────────────────────────────────
 */
window.PRODUCTS = [
  // ── 影像 & 创作 ──────────────────────────────────────────
  {
    name: "Gallery",
    mono: "G",
    tagline: "我的个人影像画廊",
    description: "收藏与展示我的照片和作品，配套图片分析能力。",
    category: "影像 & 创作",
    accent: "#8b5cf6",
    status: "Live",
    tags: ["摄影", "画廊"],
    link: "https://gallery.lfkdsk.org/",
    featured: true,
  },
  {
    name: "FlowType",
    mono: "F",
    tagline: "全 Web 的 Markdown 编辑器",
    description:
      "又名 TypeMark —— 参考 Typora 逆向实现的所见即所得 Markdown 编辑器，完全跑在浏览器里。",
    category: "影像 & 创作",
    accent: "#0ea5e9",
    status: "Live",
    tags: ["Markdown", "编辑器", "Typora"],
    link: "https://flowtype.lfkdsk.org/",
    featured: true,
  },
  {
    name: "Picg",
    mono: "P",
    tagline: "Gallery 的图片上传与管理",
    description: "为 Gallery 打造的图片上传器与管理后台，并为图片加入了分析能力。",
    category: "影像 & 创作",
    accent: "#ec4899",
    status: "Live",
    tags: ["图床", "上传", "管理"],
    link: "https://picg.lfkdsk.org/main",
  },
  {
    name: "PictorG",
    mono: "P",
    tagline: "Picg 的原生 macOS 客户端",
    description: "Picg 的 macOS App 版本，开源在 GitHub 上。",
    category: "影像 & 创作",
    accent: "#6366f1",
    status: "开源",
    tags: ["macOS", "原生", "开源"],
    link: "https://github.com/lfkdsk/PictorG",
    linkText: "GitHub",
  },
  {
    name: "Plate",
    mono: "Pl",
    tagline: "原生相册应用",
    description: "用 Swift 写的相册 App，开源在 GitHub 上。",
    category: "影像 & 创作",
    accent: "#10b981",
    status: "开源",
    tags: ["相册", "Swift", "开源"],
    link: "https://github.com/lfkdsk/Plate",
    linkText: "GitHub",
  },
  {
    name: "inktype",
    mono: "In",
    tagline: "排版设计 · CSS 主题",
    description: "用 CSS 打造的排版与字体设计主题，开源在 GitHub 上。",
    category: "影像 & 创作",
    accent: "#71717a",
    status: "开源",
    tags: ["设计", "排版", "CSS"],
    link: "https://github.com/lfkdsk/inktype",
    linkText: "GitHub",
  },

  // ── 生活 & 工具 ──────────────────────────────────────────
  {
    name: "Douban Selector",
    mono: "D",
    tagline: "豆瓣随机选片",
    description: "从你的豆瓣片单里随机抽一部，治好看片选择困难。",
    category: "生活 & 工具",
    accent: "#22c55e",
    status: "Live",
    tags: ["豆瓣", "电影"],
    link: "http://douban-selector.lfkdsk.org/",
  },
  {
    name: "Nomadlist",
    mono: "N",
    tagline: "数字游民城市指南",
    description: "复活自开源数据集，用多项指标筛选、排序适合落脚的城市。",
    category: "生活 & 工具",
    accent: "#14b8a6",
    status: "Live",
    tags: ["数字游民", "旅行", "城市"],
    link: "https://nomadlist.lfkdsk.org/",
  },
  {
    name: "SplitStupid",
    mono: "S",
    tagline: "和朋友轻松分账",
    description: "记录并平摊和朋友之间的账单 —— 做完愈发觉得 Wise 这类产品没什么护城河。",
    category: "生活 & 工具",
    accent: "#f59e0b",
    status: "Live",
    tags: ["分账", "AA", "财务"],
    link: "https://splitstupid.lfkdsk.org/",
  },
  {
    name: "squirrelv",
    mono: "S",
    tagline: "短视频收藏 · 妙妙工具",
    description: "把喜欢的「松鼠」短视频保存下来的小工具。",
    category: "生活 & 工具",
    accent: "#d97706",
    status: "Live",
    tags: ["短视频", "收藏"],
    link: "https://squirrelv.lfkdsk.org/",
  },
  {
    name: "Fog Machine",
    mono: "F",
    tagline: "世界迷雾 · WebDAV 解析与同步",
    description:
      "参考开源项目，纯 Web 方案解析「世界迷雾」轨迹，通过 GitHub 同步，并配套一个从 iCloud 自动同步的快捷指令。规划中：迷雾等级计算、分享功能。",
    category: "生活 & 工具",
    accent: "#64748b",
    status: "Beta",
    tags: ["世界迷雾", "WebDAV", "GitHub"],
    link: "https://fogworldsync.lfkdsk.org/",
  },
  {
    name: "Wall",
    mono: "W",
    tagline: "网络代理 · 妙妙工具",
    description: "一个用来当 🪜 的小工具。",
    category: "生活 & 工具",
    accent: "#ef4444",
    status: "Live",
    tags: ["网络", "代理"],
    link: "https://wall.lfkdsk.org/",
  },

  // ── 平台 & 服务 ──────────────────────────────────────────
  {
    name: "lfkdsk Auth",
    mono: "A",
    tagline: "GitHub OAuth 登录服务",
    description:
      "用 GitHub OAuth 取代到处粘贴 Personal Token，为我的各个项目提供更安全的统一登录。",
    category: "平台 & 服务",
    accent: "#3b82f6",
    status: "Live",
    tags: ["OAuth", "GitHub", "鉴权"],
    link: "https://auth.lfkdsk.org/",
  },
  {
    name: "Assets",
    mono: "A",
    tagline: "个人资产管理 · GitHub 快照",
    description:
      "把每次更新的完整资产说明以 snapshot 存进 GitHub 仓库，可外接 Claude 做 AI 分析与管理。",
    category: "平台 & 服务",
    accent: "#eab308",
    status: "Live",
    tags: ["资产管理", "GitHub", "AI"],
    link: "https://assets.lfkdsk.org/",
  },
];
