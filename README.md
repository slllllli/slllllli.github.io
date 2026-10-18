# The Paper Room · 论文解构室

**English is the default edition. The Chinese edition is available under `/zh/`.**

A bilingual notebook for close readings of foundational machine-learning papers — the question, the mechanism, the evidence, and the limits.

[Live site](https://slllllli.github.io) · [中文说明](#中文说明) · [Report an issue](https://github.com/slllllli/slllllli.github.io/issues)

![Pages](https://github.com/slllllli/slllllli.github.io/actions/workflows/pages.yml/badge.svg)

---

## What this is

Most paper summaries tell you what the authors claim. This site tries to show **why the claim was non-obvious**, **which design choice carried the weight**, and **where the argument stops**. Every note follows the same four-pass structure:

1. **The question** — the bottleneck the authors actually faced.
2. **The mechanism** — the idea, the equations, and the tensor shapes.
3. **The evidence** — the experiments and ablations that carry the claim.
4. **The limits** — where the argument stops, and what later work repaired.

The first pinned note, *Introducing The Paper Room*, is a worked miniature of this method using *Attention Is All You Need*.

## Features

- **English by default, Chinese under `/zh/`** — a real two-tree build, not a client-side text swap.
- **Pinned notes** — set `sticky` in front matter; pinned notes are sorted first on the homepage and get a visual badge.
- **Reading-first layout** — editorial typography, generous measure, sticky table of contents, reading time, and previous/next navigation.
- **Dark mode** — follows system preference, remembers the reader's choice.
- **Print-friendly, responsive** — from a wide desktop column to a single mobile column.
- **Build-time math with KaTeX** — write `$...$` and `$$...$$`; equations are pre-rendered, with no client-side CDN dependency.
- **Code copy buttons** — available on every fenced code block.
- **No front-end framework** — plain CSS and a small vanilla-JS file.

## Stack

- [Hexo 8](https://hexo.io/) — static site generator
- [KaTeX](https://katex.org/) — build-time equation rendering
- Custom `themes/paper` theme (EJS + CSS + vanilla JS)
- GitHub Pages via GitHub Actions

## Quick start

```bash
# Clone
git clone https://github.com/slllllli/slllllli.github.io.git
cd slllllli.github.io

# Install
npm install

# Local preview at http://localhost:4000
npm run server

# Production build into ./public
npm run build
```

Requirements: Node.js 20+ and npm.

Useful commands:

| Command | What it does |
| --- | --- |
| `npm run server` | Start the local Hexo server |
| `npm run build` | Generate the static site |
| `npm run clean` | Remove generated files and cache |
| `npm run deploy` | Deploy using Hexo's deploy config (not used by Pages) |

## Writing a note

Create a Markdown file in `source/_posts/`. Each language is a separate post that shares the same `translation` key.

**English edition** (`source/_posts/attention-is-all-you-need.md`):

```yaml
---
title: "Attention Is All You Need: A Close Reading"
subtitle: Why removing recurrence was the whole argument.
date: 2026-10-25 09:00:00
lang: en
translation: attention-is-all-you-need
permalink: posts/attention-is-all-you-need/
sticky: 0
categories:
  - Transformers
tags:
  - Attention
  - Sequence models
---

Opening paragraph used for the homepage excerpt.

<!-- more -->

## The question

...
```

**Chinese edition** (`source/_posts/attention-is-all-you-need.zh.md`):

```yaml
---
title: "《Attention Is All You Need》精读"
subtitle: 为什么“去掉循环”本身就是全部论证。
date: 2026-10-25 09:00:00
lang: zh
translation: attention-is-all-you-need
permalink: zh/posts/attention-is-all-you-need/
sticky: 0
categories:
  - Transformer
tags:
  - 注意力
  - 序列模型
---

开篇段落会用于首页摘要。

<!-- more -->

## 问题

...
```

Rules that matter:

- `translation` must match exactly between the two editions. It powers the language switch and the "also available in" link.
- `lang` must be `en` or `zh`.
- Give each edition an explicit `permalink`. English uses `posts/<slug>/`, Chinese uses `zh/posts/<slug>/`.
- `<!-- more -->` marks the excerpt shown on cards and in the homepage list.
- Math is rendered at build time with KaTeX. Use `$...$` for inline math and `$$...$$` for display math; no front-matter flag is needed.

### Pinning a note

Add a numeric `sticky` value to the front matter:

```yaml
sticky: 100
```

Higher values sort first on the homepage. Omit the field or set `sticky: 0` for a normal note. The card and article header render a **Pinned / 置顶** badge automatically. Archives remain chronological.

### Language routing

| Edition | Home | Archive | Topics | About | A post |
| --- | --- | --- | --- | --- | --- |
| English (default) | `/` | `/archives/` | `/topics/` | `/about/` | `/posts/<slug>/` |
| Chinese | `/zh/` | `/zh/archives/` | `/zh/topics/` | `/zh/about/` | `/zh/posts/<slug>/` |

`scripts/bilingual.js` replaces Hexo's built-in index/archive/tag/category generators with language-aware versions. Tag and category index routes are intentionally disabled; the hand-written **Topics** page provides the browsable index in both languages.

## Project structure

```text
.
├── _config.yml                 # Site config: URL, title, permalinks, theme
├── package.json
├── scripts/
│   ├── bilingual.js            # Per-language index + archive generators
│   ├── math.js                 # Build-time KaTeX rendering
│   └── reading-time.js         # Mixed CJK/Latin reading time
├── source/
│   ├── _posts/                 # English and Chinese post pairs
│   ├── about/index.md          # English about page
│   ├── topics/index.md         # English topics page
│   └── zh/
│       ├── about/index.md      # Chinese about page
│       └── topics/index.md     # Chinese topics page
├── themes/paper/
│   ├── _config.yml             # Navigation, links, reading options
│   ├── layout/                 # EJS templates
│   ├── scripts/helpers.js      # UI strings + bilingual helpers
│   └── source/                 # CSS, JS, favicon, vendored KaTeX
└── .github/workflows/pages.yml # GitHub Pages build + deploy
```

## Deployment

The site is built and deployed by GitHub Actions on every push to `main`.

1. Push to `main`.
2. The workflow installs dependencies, runs `npm run build`, and uploads `public/`.
3. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The site URL is already set in `_config.yml`:

```yaml
url: https://slllllli.github.io
```

If you fork this project, update `url`, `title`, `title_zh`, and the GitHub link in `themes/paper/_config.yml`.

## Customization

- **Colors and type** — CSS custom properties at the top of `themes/paper/source/css/style.css`.
- **Navigation and social links** — `themes/paper/_config.yml`.
- **UI strings** — the `I18N` object in `themes/paper/scripts/helpers.js`.
- **Homepage copy** — `themes/paper/layout/index.ejs` plus the `home.*` keys in `helpers.js`.
- **Reading layout** — `.post-layout` and `.prose` rules in `style.css`.

## Corrections

If a note contains an error, please [open an issue](https://github.com/slllllli/slllllli.github.io/issues) with the passage and the correction. Analytical disagreements are welcome too; the point is to make the argument clearer.

Content is published under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). The theme code is available under the same repository terms.

---

## 中文说明

「论文解构室」是一份中英双语的论文精读笔记，关注机器学习基础论文中的四个问题：**问题、机制、证据、局限**。每篇笔记都按同一套结构展开，方便在不同论文之间比较。

首篇置顶文章《写在开篇：我们如何精读一篇论文》以《Attention Is All You Need》为例，演示了这套阅读方法。

### 主要特性

- **默认英文，中文独立路由**：`/` 为英文，`/zh/` 为中文；不是简单的页面内文字替换。
- **置顶文章**：在 front matter 中设置 `sticky`，首页会优先排序并显示置顶徽章。
- **阅读优先的排版**：编辑式字体、舒适行宽、侧边目录、阅读时长、上一篇/下一篇。
- **明暗主题**：跟随系统，并记住读者选择。
- **响应式与打印友好**：桌面宽栏到移动端单栏都能正常阅读。
- **KaTeX 构建期公式渲染**：直接写 `$...$` 和 `$$...$$`，公式在构建时渲染，不依赖客户端 CDN。
- **代码复制按钮**：每个代码块都有。

### 技术栈

- [Hexo 8](https://hexo.io/)
- [KaTeX](https://katex.org/)：构建期公式渲染
- 自定义主题 `themes/paper`（EJS + CSS + 原生 JS）
- GitHub Actions + GitHub Pages

### 本地运行

```bash
git clone https://github.com/slllllli/slllllli.github.io.git
cd slllllli.github.io
npm install
npm run server   # http://localhost:4000
npm run build    # 生成到 ./public
```

### 新增一篇双语笔记

在 `source/_posts/` 下新建两个 Markdown 文件，共用同一个 `translation` 值：

英文版：

```yaml
---
title: "Attention Is All You Need: A Close Reading"
date: 2026-10-25 09:00:00
lang: en
translation: attention-is-all-you-need
permalink: posts/attention-is-all-you-need/
sticky: 0
categories: [Transformers]
tags: [Attention, Sequence models]
---
```

中文版：

```yaml
---
title: "《Attention Is All You Need》精读"
date: 2026-10-25 09:00:00
lang: zh
translation: attention-is-all-you-need
permalink: zh/posts/attention-is-all-you-need/
sticky: 0
categories: [Transformer]
tags: [注意力, 序列模型]
---
```

注意事项：

- 两边的 `translation` 必须完全一致，语言切换和“其他版本”链接依赖它。
- `lang` 只能是 `en` 或 `zh`。
- 英文永久链接使用 `posts/<slug>/`，中文使用 `zh/posts/<slug>/`。
- 用 `<!-- more -->` 标记首页摘要的截断位置。
- 公式在构建时由 KaTeX 渲染；行内用 `$...$`，独立公式用 `$$...$$`，无需额外开关。
- `sticky: 100` 表示置顶，数值越大越靠前；`sticky: 0` 或不写表示普通文章。

### 路由约定

| 版本 | 首页 | 归档 | 主题 | 关于 | 文章 |
| --- | --- | --- | --- | --- | --- |
| 英文（默认） | `/` | `/archives/` | `/topics/` | `/about/` | `/posts/<slug>/` |
| 中文 | `/zh/` | `/zh/archives/` | `/zh/topics/` | `/zh/about/` | `/zh/posts/<slug>/` |

`scripts/bilingual.js` 会按语言重写 Hexo 的首页与归档生成器。标签页与分类页被有意关闭，改由手写的「主题」页提供双语索引。

### 部署

推送到 `main` 后，GitHub Actions 会自动执行 `npm run build` 并部署 `public/`。在仓库设置中将 **Pages → Build and deployment → Source** 设为 **GitHub Actions** 即可。

如果 fork 本项目，请同步修改 `_config.yml` 中的 `url`、`title`、`title_zh`，以及 `themes/paper/_config.yml` 里的 GitHub 链接。

### 定制

- 颜色与字体：`themes/paper/source/css/style.css` 顶部的 CSS 变量。
- 导航与社交链接：`themes/paper/_config.yml`。
- 界面文案：`themes/paper/scripts/helpers.js` 中的 `I18N` 对象。
- 首页文案：`themes/paper/layout/index.ejs` 与 `helpers.js` 的 `home.*` 键。

### 纠错

如果笔记有误，欢迎[提 issue](https://github.com/slllllli/slllllli.github.io/issues)，附上原文段落与修改建议。也欢迎对分析本身提出不同意见——目标是把论证讲清楚。

内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。
