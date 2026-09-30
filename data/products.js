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
  {
    name: "SplashG",
    mono: "Sg",
    tagline: "GitHub 相册的 iOS 客户端",
    description:
      "在 iOS 上浏览 album_template 相册 —— 自己的仓库，加上关注好友的动态流。MyerSplash 风格的深色瀑布流与悬浮胶囊标签栏，GitHub OAuth 登录，缓存过的相册离线也能翻。",
    category: "影像 & 创作",
    accent: "#f97316",
    status: "开源",
    tags: ["iOS", "相册", "SwiftUI"],
    link: "https://github.com/lfkdsk/SplashG",
    linkText: "GitHub",
  },
  {
    name: "Rawloom",
    mono: "Rl",
    tagline: "复现 Adobe Project Indigo 的 iOS 计算摄影相机",
    description:
      "连拍一组刻意欠曝的 RAW 帧，对齐、合并降噪、借手抖做超分辨率，再以接近单反的影调与色彩收尾 —— 整条管线用 Metal 实现，输出计算 RAW 的 DNG 和 Ultra HDR JPEG。",
    category: "影像 & 创作",
    accent: "#e11d48",
    status: "开源",
    tags: ["iOS", "计算摄影", "Metal"],
    link: "https://github.com/lfkdsk/Rawloom",
    linkText: "GitHub",
  },
  {
    name: "album_template",
    mono: "At",
    tagline: "Gallery 背后的相册站点生成器",
    description:
      "把放照片的 GitHub 仓库构建成静态相册站：build.py 生成 SQLite 数据库和每个相册的页面，魔改的 Hexo 主题负责渲染，前端用 wasm SQLite 直接查库，地点、随机、状态页都跑在 GitHub Pages 上。SplashG 浏览的就是这种相册。",
    category: "影像 & 创作",
    accent: "#0d9488",
    status: "开源",
    tags: ["Hexo", "相册", "GitHub Pages"],
    link: "https://github.com/lfkdsk/album_template",
    linkText: "GitHub",
  },
  {
    name: "Gallery Daily",
    mono: "Gd",
    tagline: "每天一张 Gallery 照片，做成 SVG",
    description:
      "每天从 Gallery 的数据生成两张 SVG：一张带相框和 EXIF 栏的当日照片（按日期确定性选片），一张当年的拍摄热力图，推到 daily 分支供 README 引用。零依赖，几秒跑完。",
    category: "影像 & 创作",
    accent: "#a855f7",
    status: "开源",
    tags: ["SVG", "GitHub Actions", "摄影"],
    link: "https://github.com/lfkdsk/gallery-daily",
    linkText: "GitHub",
  },
  {
    name: "Gallery Animal Index",
    mono: "Ai",
    tagline: "给相册建动物索引的 Agent Skill",
    description:
      "让 Claude Code / Codex 遍历照片仓库、认出照片里的动物，维护一份中英双语的「物种 → 图片」索引。按文件夹缓存扫描结果，新照片只做增量；优先读缩略图分支，省 token。",
    category: "影像 & 创作",
    accent: "#84cc16",
    status: "开源",
    tags: ["Agent Skill", "Claude Code", "图像识别"],
    link: "https://github.com/lfkdsk/gallery-analysis-skill",
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
  {
    name: "Burrow",
    mono: "B",
    tagline: "Mac 原生系统维护工具",
    description:
      "清理 · 工程 · 安装包 · 软件 · 优化 · 分析 · 状态，七大模块按行星命名。灵感来自开源项目 Mole（鼹鼠）—— Burrow 是鼹鼠深挖的洞穴。纯 SwiftUI 实现，只依赖 Sparkle 做自动更新。",
    category: "生活 & 工具",
    accent: "#d946ef",
    status: "开源",
    tags: ["macOS", "SwiftUI", "系统清理"],
    link: "https://github.com/lfkdsk/burrow",
    linkText: "GitHub",
  },
  {
    name: "海外哔哩",
    mono: "Ob",
    tagline: "Apple TV 上的第三方 bilibili",
    description:
      "面向海外用户的 tvOS 客户端，核心是应用内自适应 CDN：分块下载、镜像域名池、按实测网速自动切线。登录后最高 8K / 4K / HDR，弹幕、字幕、直播与追番一并支持。",
    category: "生活 & 工具",
    accent: "#fb7299",
    status: "开源",
    tags: ["tvOS", "bilibili", "CDN"],
    link: "https://github.com/lfkdsk/oversea-bili",
    linkText: "GitHub",
  },
  {
    name: "MyTrails",
    mono: "Mt",
    tagline: "复刻 AllTrails 的徒步 App",
    description:
      "iOS 徒步应用：7.7 万条美国步道、4.2 万条 GPS 路线，首次启动下载全量离线数据（配套开源数据库 Trails-DB）。全文搜索、GPS 轨迹记录与 iCloud 同步，零第三方依赖。",
    category: "生活 & 工具",
    accent: "#65a30d",
    status: "开源",
    tags: ["iOS", "徒步", "离线地图"],
    link: "https://github.com/lfkdsk/MyTrails",
    linkText: "GitHub",
  },
  {
    name: "Trails-DB",
    mono: "Td",
    tagline: "MyTrails 的离线步道数据库",
    description:
      "7.7 万条美国徒步步道的元数据 + 4.2 万条离线路线几何，打包成单个 SQLite 文件，带 FTS5 全文索引。路线取自美国林务局的公有领域数据和 OpenStreetMap。仅供学习研究。",
    category: "生活 & 工具",
    accent: "#4d7c0f",
    status: "开源",
    tags: ["SQLite", "开放数据", "徒步"],
    link: "https://github.com/lfkdsk/Trails-DB",
    linkText: "GitHub",
  },
  {
    name: "EmbyTV",
    mono: "Et",
    tagline: "为 LG webOS 电视重写的 Emby 客户端",
    description:
      "不是 emby-web 套壳，UI、焦点导航和播放器都按遥控器从头写。起因是国语、粤语音轨语言码同为 chi 而切不动 —— 按 Title 重建音轨标签，走电视原生管线瞬时切换，不依赖服务器转码。同一份代码也有纯静态的网页版。",
    category: "生活 & 工具",
    accent: "#52b54b",
    status: "开源",
    tags: ["webOS", "Emby", "电视"],
    link: "https://github.com/lfkdsk/embytv-webos",
    linkText: "GitHub",
  },
  {
    name: "Mocation Web",
    mono: "Mo",
    tagline: "影视取景地地图",
    description:
      "明亮杂志风的取景地浏览站：在地图上找电影、剧集的拍摄地。基于 Mocation App 的公开只读接口，Next.js 服务端渲染 + ISR 缓存，自带图片代理和只读白名单代理，GCJ-02 坐标自动转换。",
    category: "生活 & 工具",
    accent: "#0284c7",
    status: "开源",
    tags: ["Next.js", "地图", "影视"],
    link: "https://github.com/lfkdsk/Mocation",
    linkText: "GitHub",
  },
  {
    name: "Quick Copy",
    mono: "Qc",
    tagline: "存进 Git 的剪贴板",
    description:
      "粘贴文字或拖入图片，一次提交直接写进你自己的 GitHub 仓库 —— 无服务端、无数据库，浏览器直连 GitHub API。条目就是普通 JSON 和图片文件，删掉应用数据也照样能读。",
    category: "生活 & 工具",
    accent: "#ff5f33",
    status: "Live",
    tags: ["剪贴板", "GitHub", "无后端"],
    link: "https://quick-copy.lfkdsk.org/",
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
  {
    name: "Switchboard",
    mono: "Sb",
    tagline: "浏览器里的远程终端",
    description:
      "跑一条命令把机器接入，就能在浏览器拿到真正的交互式终端 —— 多标签、文件传输、实时主机状态。两端都向 Cloudflare 中继出站，NAT / 防火墙后也能用，无需端口转发或 VPN。",
    category: "平台 & 服务",
    accent: "#06b6d4",
    status: "Live",
    tags: ["远程终端", "Cloudflare", "CLI"],
    link: "https://shell.lfkdsk.org/",
  },

  // ── 游戏 & 引擎 ──────────────────────────────────────────
  {
    name: "Alpine Post",
    mono: "Ap",
    tagline: "《山巅邮路》· 零战斗的送信 RPG",
    description:
      "代班邮差冒雨把三封信送上山，赶在最后一班缆车停运前抵达灯塔：五张地图，没有战斗。基于 Pocket RPG Kit，同一份包跑在桌面、浏览器（wasm）和 PSP 上；闲置 10 秒自动演示通关，随时接管，还能倒带。",
    category: "游戏 & 引擎",
    accent: "#dc2626",
    status: "开源",
    tags: ["RPG", "PocketJS", "PSP"],
    link: "https://github.com/lfkdsk/pocket-alpine-post",
    linkText: "GitHub",
  },
  {
    name: "Pocket RPG Kit",
    mono: "Pk",
    tagline: "PocketJS 上的 2D 瓦片 RPG 运行时",
    description:
      "RPG Maker 式游戏需要的部件，但不绑定任何一款游戏：纯 TS 引擎（事件解释器、多地图、确定性存档，同一条按键录像在所有平台逐字节重放）、Solid UI 组件、演示模式和素材管线，外加 rpgkit-project/v1 数据格式、四个示例和预览版地图编辑器。",
    category: "游戏 & 引擎",
    accent: "#7c3aed",
    status: "开源",
    tags: ["游戏引擎", "TypeScript", "PocketJS"],
    link: "https://github.com/lfkdsk/pocketjs-rpgkit",
    linkText: "GitHub",
  },

  // ── 开发 & 研究 ──────────────────────────────────────────
  {
    name: "RILO",
    mono: "Ri",
    tagline: "Unity IL2CPP 的 IL 层优化器",
    description:
      "作为 UnityLinker 的自定义步骤，在链接后用 Mono.Cecil 改写 IL 再交给 il2cpp —— 专消 clang -O3 看不穿的托管开销：接口派发、委托、装箱、LINQ 枚举器、不透明的 BCL 调用。收益和负面结果都如实记录在案。",
    category: "开发 & 研究",
    accent: "#334155",
    status: "开源",
    tags: ["Unity", "IL2CPP", "编译优化"],
    link: "https://github.com/lfkdsk/RILO",
    linkText: "GitHub",
  },
  {
    name: "background-click",
    mono: "Bc",
    tagline: "macOS 后台点击：点完不抢焦点",
    description:
      "从逆向 OpenAI Codex 的 Computer Use 插件出发，只用公开的 CGEvent / NSEvent / AX API 加一个私有 SPI，复现不抢前台焦点的点击、拖拽和键盘输入。附 CLI、靶子 App 和完整的逆向报告。",
    category: "开发 & 研究",
    accent: "#9333ea",
    status: "开源",
    tags: ["macOS", "逆向", "Computer Use"],
    link: "https://github.com/lfkdsk/bg-click",
    linkText: "GitHub",
  },
  {
    name: "lc-rehab",
    mono: "Lc",
    tagline: "终端里的 LeetCode 复健工具",
    description:
      "拉题、本地写代码、在线自测、提交判题全在命令行完成；内置 NeetCode 150 复健序列，AC 后按 1 / 3 / 7 / 16 / 35 天安排复习。请求经自己部署的 Cloudflare Worker 中转，npm run setup 一键搞定。",
    category: "开发 & 研究",
    accent: "#ffa116",
    status: "开源",
    tags: ["CLI", "LeetCode", "Cloudflare"],
    link: "https://github.com/lfkdsk/Rehabilitation",
    linkText: "GitHub",
  },
];
