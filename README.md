# 产品展示页 / Products Showcase

一个纯静态的产品发布展示入口。**无需构建、无需依赖**，直接用浏览器打开 `index.html` 即可。

## ✨ 特性

- 数据驱动：所有产品集中在 `data/products.js`，加产品 = 加一个对象
- 按 `category` 自动分组成区块，响应式网格
- 深色 / 浅色模式（自动跟随系统，可手动切换）
- 实时搜索；顶部自动统计产品 / 已上线 / 分类数量
- 图标支持 **字母 monogram**（默认）/ **图片 logo** / **emoji**
- 状态徽章自动配色（Live / Beta / Coming Soon / 开源 …）

## 🚀 本地预览

直接双击 `index.html`，或起一个本地服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## ➕ 新增一个产品

编辑 [`data/products.js`](data/products.js)，往数组里加一个对象：

```js
{
  name: "产品名称",                       // 必填
  tagline: "一句话简介",                   // 必填
  description: "更详细的描述（可选）",
  category: "影像 & 创作",                 // 分组名，相同分类归到同一区块
  mono: "G",                              // 图标字母（不填则自动取首字母）
  icon: "assets/icons/myapp.svg",         // 图片图标（可选，填了则覆盖字母图标）
  accent: "#8b5cf6",                      // 主题色（影响图标、悬停、链接配色）
  status: "Live",                         // Live | Beta | Coming Soon | 开源 | 自定义
  tags: ["AI", "CLI"],                    // 标签（可选）
  link: "https://example.com",            // 跳转链接（可选，卡片整体可点）
  linkText: "GitHub",                     // 链接文案（不填则显示域名）
  featured: false                         // true = 标记为旗舰（带 ★）
}
```

**图标有三种方式**，按优先级：

1. **字母 monogram（默认）**：不填 `icon`，自动用名称首字母（或 `mono` 指定）生成带主题色的字母图标 —— 当前所有产品用的就是这种，风格统一。
2. **图片 logo**：把图标放进 `assets/icons/`，在 `icon` 填路径（如 `"assets/icons/myapp.svg"`）。推荐正方形 SVG 或 ≥256px 的 PNG。
3. **emoji**：`icon` 直接写 emoji，如 `"🚀"`。

> **分类**：`category` 相同的产品会自动归到同一区块。新分类想要右侧的英文小标题，在
> [`assets/js/app.js`](assets/js/app.js) 顶部的 `CATEGORY_EN` 里加一行即可（不加也能正常显示）。

## 📁 目录结构

```
.
├── index.html              # 页面入口
├── data/products.js        # ← 产品数据（你主要改这里）
├── assets/
│   ├── css/styles.css      # 样式
│   ├── js/app.js           # 渲染逻辑
│   └── icons/              # 产品图标放这里
└── README.md
```
