# 产品展示页 / Products Showcase

一个纯静态的产品发布展示入口。**无需构建、无需依赖**，直接用浏览器打开 `index.html` 即可。

## ✨ 特性

- 数据驱动：所有产品集中在 `data/products.js`，加产品 = 加一个对象
- 按 `category` 自动分组成区块，宽屏两列、窄屏一列
- 亮色为主、黑字，一个强调色（`--accent`）贯穿全站；深色模式跟随系统，可手动切换
- 每个项目排成一行：名字 / 一句话 / 描述 / 域名 + 标签，没有卡片、没有阴影

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
  status: "Live",                         // Live | Beta | Coming Soon | 开源 | 自定义
  tags: ["AI", "CLI"],                    // 标签（可选），排在域名右边
  link: "https://example.com",            // 跳转链接（可选，整行可点）
  linkText: "自定义文案"                   // 可选，仅当链接解析不出域名时兜底
}
```

**关于 `link` 的显示**：默认展示链接本身的路径 —— `github.com/lfkdsk/Plate`、
`picg.lfkdsk.org/main` —— 比笼统写一个「GitHub」有信息量。

**状态**：`status` 里含「Live / 上线」的会用强调色标出，其余（开源 / Beta / Coming Soon）
是安静的灰字。

> **分类**：`category` 相同的产品会自动归到同一区块。新分类想要旁边的英文小标题，在
> [`assets/js/app.js`](assets/js/app.js) 顶部的 `CATEGORY_EN` 里加一行即可（不加也能正常显示）。

### 数据里的历史字段

`mono`、`icon`、`accent`、`featured` 是上一版卡片布局留下的（字母图标、每个产品一个主题色、
★ 旗舰标记）。当前这版不渲染它们，数据里先留着 —— 想回到那套外观的话，`git revert` 一下就行，
不用重新填 20 份配色。

## 📁 目录结构

```
.
├── index.html              # 页面入口
├── data/products.js        # ← 产品数据（你主要改这里）
├── assets/
│   ├── css/styles.css      # 样式
│   └── js/app.js           # 渲染逻辑
└── README.md
```
