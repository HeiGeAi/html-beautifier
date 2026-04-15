# Design System Reference（完整组件库）

本文件包含 html-beautifier 的全部 CSS 变量、组件代码和页面模板。
生成 HTML 时，从此处复制所需组件，组装成完整页面。

**重要说明**：所有样式均为静态，无动画效果（无 transition、animation、hover），确保打印友好。

## 目录

1. [CSS 变量（全部颜色 Token）](#1-css-变量)
2. [全局样式与骨架](#2-全局样式)
3. [布局模式骨架](#3-布局模式)
4. [渐变文字 gt-*](#4-渐变文字)
5. [card-light 万能卡片](#5-card-light)
6. [bg-dot 点阵背景](#6-bg-dot)
7. [section-divider 分隔线](#7-section-divider)
8. [badge 药丸标签](#8-badge)
9. [num-dot 编号圆点](#9-num-dot)
10. [icon-box 图标容器](#10-icon-box)
11. [Editorial 长滚动组件](#11-editorial)
12. [Dashboard 看板组件](#12-dashboard)
13. [工具类 Utilities](#13-utilities)
14. [组装示例](#14-组装示例)

---

## 1. CSS 变量

```css
:root {
    /* 马卡龙六色 · 三级梯度 */
    --rose-500: #e8889a;   --rose-100: #fdf0f3;   --rose-50: #fef7f8;
    --rose-deep: #c45a65;

    --mint-500: #6bc4a6;   --mint-100: #edf9f4;   --mint-50: #f5fcf9;
    --mint-deep: #3d8e72;

    --lavender-500: #a78bda; --lavender-100: #f3eefb; --lavender-50: #f9f6fd;
    --lavender-deep: #6b4fa0;

    --butter-500: #e4c56a; --butter-100: #fdf8e8; --butter-50: #fefcf3;
    --butter-deep: #b89520;

    --sky-500: #7ab4d9;    --sky-100: #edf5fb;    --sky-50: #f5f9fd;
    --sky-deep: #3a7aaa;

    --peach-500: #e8a87c;  --peach-100: #fdf3ec;  --peach-50: #fef9f5;
    --peach-deep: #c47530;

    /* 文字层级 */
    --ink-900: #1a1a2e;
    --ink-800: #2d2b3d;
    --ink-600: #4a4862;
    --ink-500: #6b6880;
    --ink-400: #908da3;
    --ink-300: #b5b3c4;
    --ink-200: #d8d6e3;
    --ink-100: #eceaf3;

    /* 背景层级 */
    --base-50: #fafbfc;
    --base-100: #f1f0f5;

    /* 卡片系统 */
    --card-border: #e8e6ef;
    --card-shadow: 0 1px 3px rgba(100,80,140,0.04), 0 4px 16px rgba(100,80,140,0.04);

    /* 深色模式 */
    --dark-bg: #1e1b2e;
    --dark-card: #2a2740;
    --dark-border: #3d3856;
    --gold: #e4c56a;
}
```

---

## 2. 全局样式

```css
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Noto Sans SC', 'DM Sans', -apple-system, 'PingFang SC', sans-serif;
    color: var(--ink-900);
    background: var(--base-50);
    -webkit-font-smoothing: antialiased;
    line-height: 1.75;
    font-weight: 400;
}

.page-number {
    position: absolute;
    bottom: 16px;
    right: 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--ink-400);
    font-weight: 500;
}

/* 通用内容容器 */
.section-page {
    padding: 40px 48px;
    background: #fff;
}
.section-inner {
    max-width: 1000px;
    margin: 0 auto;
}

/* 打印样式 */
@media print {
    body { background: white; }
    .card-light { break-inside: avoid; }
    .section-divider { page-break-after: avoid; }
    .editorial-module { page-break-inside: avoid; }
    .dashboard-card { break-inside: avoid; }
}

/* 基础响应式 */
@media (max-width: 1024px) {
    .section-page { padding: 32px 24px; }
    .section-title { font-size: 28px !important; }
    .cover h1, .cover-title { font-size: 34px !important; }
    .grid-3, .grid-4, .grid-5 { grid-template-columns: 1fr 1fr !important; }
    .grid-2-1 { grid-template-columns: 1fr !important; }
    .cap-top { grid-template-columns: 1fr 1fr !important; }
    .gold-cards { grid-template-columns: 1fr 1fr !important; }
}

@media (max-width: 640px) {
    .section-page { padding: 24px 16px; }
    .grid-2, .grid-3, .grid-4, .grid-5 { grid-template-columns: 1fr !important; }
    .about-grid { grid-template-columns: 1fr !important; }
    .team-grid { grid-column: span 1 !important; }
    .challenge-grid { grid-template-columns: 1fr !important; }
    .arch-items { grid-template-columns: 1fr !important; }
}
```

---

## 3. 布局模式

### 3A. Editorial 模式（长滚动，推荐）

**适用场景**：报告、分析、复盘、方案展示、产品介绍、长文档

```css
.editorial-page {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 24px;
}

.editorial-hero {
    padding: 80px 0 48px;
    text-align: center;
    border-bottom: 1px solid var(--card-border);
    margin-bottom: 48px;
}

.editorial-module {
    padding: 40px 0;
    border-bottom: 1px solid var(--ink-100);
}
.editorial-module:last-of-type {
    border-bottom: none;
}

.editorial-footer {
    padding: 48px 0;
    text-align: center;
    border-top: 1px solid var(--card-border);
    margin-top: 32px;
}
```

HTML 骨架：
```html
<body>
<div class="editorial-page">
    <div class="editorial-hero">
        <h1>页面标题</h1>
        <p class="subtitle">副标题或摘要</p>
    </div>
    <div class="editorial-module">
        <h2>章节标题</h2>
        <div class="section-divider"></div>
        <p>内容...</p>
    </div>
    <div class="editorial-module">
        <h2>章节标题</h2>
        <div class="section-divider"></div>
        <div class="grid-2">
            <div class="card-light">...</div>
            <div class="card-light">...</div>
        </div>
    </div>
    <div class="editorial-footer">
        <p>总结或行动号召</p>
    </div>
</div>
</body>
```

### 3B. Dashboard 模式（看板）

```css
.editorial-page {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 24px;
}

.editorial-hero {
    padding: 80px 0 48px;
    text-align: center;
    border-bottom: 1px solid var(--card-border);
    margin-bottom: 48px;
}

.editorial-module {
    padding: 40px 0;
    border-bottom: 1px solid var(--ink-100);
}
.editorial-module:last-of-type {
    border-bottom: none;
}

.editorial-footer {
    padding: 48px 0;
    text-align: center;
    border-top: 1px solid var(--card-border);
    margin-top: 32px;
}
```

HTML 骨架：
```html
<body>
<div class="editorial-page">
    <div class="editorial-hero">...</div>
    <div class="editorial-module">...</div>
    <div class="editorial-module">...</div>
    <div class="editorial-footer">...</div>
</div>
</body>
```

### 3B. Dashboard 模式（看板）

**适用场景**：数据汇总、状态监控、多维对比、经营摘要

```css
.dashboard-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 24px;
}

.dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--card-border);
}
.dashboard-header h1 {
    font-family: 'Noto Serif SC', serif;
    font-size: 28px;
    font-weight: 900;
}

.dashboard-status-bar {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
}
.status-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
}
.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.dashboard-grid {
    display: grid;
    gap: 16px;
}
.dashboard-grid.cols-2 { grid-template-columns: 1fr 1fr; }
.dashboard-grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.dashboard-grid.cols-4 { grid-template-columns: repeat(4, 1fr); }
.dashboard-grid.cols-2-1 { grid-template-columns: 2fr 1fr; }
.dashboard-grid.cols-1-2 { grid-template-columns: 1fr 2fr; }

.dashboard-card {
    background: #fff;
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 20px 24px;
    box-shadow: var(--card-shadow);
}
.dashboard-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}
.dashboard-card-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--ink-600);
    display: flex;
    align-items: center;
    gap: 8px;
}

.dashboard-summary {
    display: flex;
    gap: 16px;
    margin-top: 24px;
    padding: 16px 24px;
    background: var(--base-50);
    border-radius: 12px;
    border: 1px solid var(--card-border);
}
.summary-item {
    flex: 1;
    text-align: center;
}
.summary-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
}
.summary-label {
    font-size: 12px;
    color: var(--ink-400);
    margin-top: 4px;
}

/* 列表型看板卡 */
.list-card-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid var(--ink-100);
}
.list-card-item:last-child { border-bottom: none; }

/* 数据表格 */
.data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
}
.data-table th {
    text-align: left;
    padding: 8px 12px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink-400);
    border-bottom: 2px solid var(--ink-100);
}
.data-table td {
    padding: 10px 12px;
    border-bottom: 1px solid var(--ink-100);
    color: var(--ink-600);
}
.data-table tr:last-child td { border-bottom: none; }
```

HTML 骨架：
```html
<body>
<div class="dashboard-page">
    <div class="dashboard-header">
        <h1>看板标题</h1>
        <span class="badge" style="...">状态</span>
    </div>
    <div class="dashboard-status-bar">...</div>
    <div class="dashboard-grid cols-3">
        <div class="dashboard-card">...</div>
        <div class="dashboard-card">...</div>
        <div class="dashboard-card">...</div>
    </div>
    <div class="dashboard-summary">...</div>
</div>
</body>
```

### 3C. Single 模式（单页）

**适用场景**：活动公告、单页简介、邀请函、单一主题

```css
.single-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 40px;
    position: relative;
}
.single-inner {
    max-width: 680px;
    text-align: center;
}
```

---

## 4. 渐变文字

每页至多一个渐变文字元素，用于标题中的强调词。

```css
.gt-rose {
    background: linear-gradient(135deg, var(--rose-500), var(--rose-deep));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
}
.gt-mint {
    background: linear-gradient(135deg, var(--mint-500), var(--mint-deep));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
}
.gt-lavender {
    background: linear-gradient(135deg, var(--lavender-500), var(--lavender-deep));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
}
.gt-sky {
    background: linear-gradient(135deg, var(--sky-500), var(--sky-deep));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
}
.gt-butter {
    background: linear-gradient(135deg, var(--butter-500), var(--butter-deep));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
}
.gt-peach {
    background: linear-gradient(135deg, var(--peach-500), var(--peach-deep));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

## 5. card-light

最核心的组件。白底 + 精细边框 + 双层微阴影。

```css
.card-light {
    background: #fff;
    border: 1px solid var(--card-border);
    box-shadow: var(--card-shadow);
}
```

推荐 border-radius：14px 大卡、12px 中卡、10px 小卡。

快捷变体：
```css
.card-tint-rose { background: var(--rose-50); border: 1px solid var(--rose-100); }
.card-tint-mint { background: var(--mint-50); border: 1px solid var(--mint-100); }
.card-tint-lav  { background: var(--lavender-50); border: 1px solid var(--lavender-100); }
.card-tint-sky  { background: var(--sky-50); border: 1px solid var(--sky-100); }
.card-tint-butter { background: var(--butter-50); border: 1px solid var(--butter-100); }
.card-tint-peach { background: var(--peach-50); border: 1px solid var(--peach-100); }

.card-accent-left { border-left: 3px solid var(--rose-500); }
.card-accent-left.mint { border-left-color: var(--mint-500); }
.card-accent-left.lav { border-left-color: var(--lavender-500); }
.card-accent-left.sky { border-left-color: var(--sky-500); }
```

---

## 6. bg-dot

点阵纹理背景，用于封面页或大面积留白区。

```css
.bg-dot {
    background-image: radial-gradient(circle, var(--ink-200) 1px, transparent 1px);
    background-size: 28px 28px;
}
```

用法：
```html
<div class="bg-dot" style="position:absolute;inset:0;z-index:0;"></div>
```

---

## 7. section-divider

```css
.section-divider {
    width: 48px; height: 3px; border-radius: 2px;
}
.section-divider.rose { background: linear-gradient(90deg, var(--rose-500), var(--rose-deep)); }
.section-divider.mint { background: linear-gradient(90deg, var(--mint-500), var(--mint-deep)); }
.section-divider.lavender { background: linear-gradient(90deg, var(--lavender-500), var(--lavender-deep)); }
.section-divider.sky { background: linear-gradient(90deg, var(--sky-500), var(--sky-deep)); }
.section-divider.peach { background: linear-gradient(90deg, var(--peach-500), var(--peach-deep)); }
.section-divider.butter { background: linear-gradient(90deg, var(--butter-500), var(--butter-deep)); }
```

---

## 8. badge

```css
.badge {
    display: inline-flex; align-items: center;
    padding: 2px 10px; border-radius: 100px;
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.02em;
}
```

使用：
```html
<span class="badge" style="background: var(--rose-100); color: var(--rose-500);">CORE</span>
```

---

## 9. num-dot

```css
.num-dot {
    width: 22px; height: 22px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 800; color: #fff; flex-shrink: 0;
}
```

使用：`<div class="num-dot" style="background: var(--mint-500);">1</div>`

---

## 10. icon-box

```css
.icon-box {
    width: 40px; height: 40px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; flex-shrink: 0;
}
.icon-box.sm { width: 32px; height: 32px; border-radius: 8px; font-size: 14px; }
.icon-box.lg { width: 48px; height: 48px; border-radius: 12px; font-size: 20px; }
```

使用：
```html
<div class="icon-box" style="background: var(--sky-100); color: var(--sky-500);">
    <i class="fa-solid fa-chart-line"></i>
</div>
```

---

## 22. Dashboard 看板组件

以下是 Dashboard 模式专用的扩展组件。

### 进度条

```css
.progress-bar-bg {
    height: 6px; border-radius: 3px;
    background: var(--ink-100); overflow: hidden;
}
.progress-bar-fill {
    height: 100%; border-radius: 3px;
}
```

使用：
```html
<div class="progress-bar-bg">
    <div class="progress-bar-fill" style="width: 72%; background: var(--mint-500);"></div>
</div>
```

### 指标卡

```css
.metric-card {
    background: #fff;
    border: 1px solid var(--card-border);
    border-radius: 12px; padding: 16px 20px;
    box-shadow: var(--card-shadow);
}
.metric-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 32px; font-weight: 700;
    line-height: 1.1;
}
.metric-label {
    font-size: 12px; color: var(--ink-400);
    margin-top: 4px;
}
.metric-change {
    font-size: 11px; font-weight: 700;
    margin-top: 4px;
}
.metric-change.up { color: var(--mint-deep); }
.metric-change.down { color: var(--rose-deep); }
```

### 标签列

```css
.tag-list { display: flex; flex-wrap: wrap; gap: 6px; }
.tag-item {
    padding: 3px 10px; border-radius: 6px;
    font-size: 11px; font-weight: 600;
}
```

---

## 23. Editorial 编辑式组件

### 引用块

```css
.editorial-quote {
    border-left: 3px solid var(--lavender-500);
    padding: 16px 20px; margin: 20px 0;
    background: var(--lavender-50);
    border-radius: 0 10px 10px 0;
    font-size: 15px; color: var(--ink-600);
    line-height: 1.8;
}
.editorial-quote cite {
    display: block; margin-top: 8px;
    font-size: 12px; color: var(--ink-400);
    font-style: normal;
}
```

### 正文段落

```css
.editorial-body {
    font-size: 15px; line-height: 1.85;
    color: var(--ink-600);
}
.editorial-body p { margin-bottom: 16px; }
.editorial-body h3 {
    font-family: 'Noto Serif SC', serif;
    font-size: 22px; font-weight: 800;
    margin: 32px 0 12px; color: var(--ink-900);
}
```

### 图文对照

```css
.side-by-side {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 24px; margin: 24px 0;
}
```

---

## 24. 工具类

```css
/* 网格 */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.grid-2-1 { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
.grid-1-2 { display: grid; grid-template-columns: 1fr 2fr; gap: 20px; }

/* Flex */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.flex-1 { flex: 1; }
.gap-6 { gap: 6px; } .gap-8 { gap: 8px; } .gap-10 { gap: 10px; }
.gap-12 { gap: 12px; } .gap-16 { gap: 16px; } .gap-20 { gap: 20px; }
.gap-24 { gap: 24px; }

/* 文字 */
.fw-600 { font-weight: 600; } .fw-700 { font-weight: 700; } .fw-900 { font-weight: 900; }
.fs-11 { font-size: 11px; } .fs-12 { font-size: 12px; } .fs-13 { font-size: 13px; }
.fs-14 { font-size: 14px; } .fs-15 { font-size: 15px; } .fs-16 { font-size: 16px; }
.text-body { color: var(--ink-500); }
.text-caption { color: var(--ink-400); }
.text-center { text-align: center; }
.lh-relaxed { line-height: 1.85; }

/* 间距 */
.mt-4 { margin-top: 4px; } .mt-8 { margin-top: 8px; } .mt-12 { margin-top: 12px; }
.mt-16 { margin-top: 16px; } .mt-20 { margin-top: 20px; } .mt-24 { margin-top: 24px; }
.mb-4 { margin-bottom: 4px; } .mb-8 { margin-bottom: 8px; } .mb-12 { margin-bottom: 12px; }
.mb-16 { margin-bottom: 16px; } .mb-20 { margin-bottom: 20px; } .mb-24 { margin-bottom: 24px; }

/* 强调条 */
.emphasis-bar {
    border-radius: 14px; padding: 18px 28px;
    text-align: center; font-size: 14px; font-weight: 500;
    line-height: 1.8;
}
.emphasis-bar strong { font-weight: 700; }
```


---

## 14. 组装示例

### Editorial 模式骨架（推荐）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>报告标题</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700;800;900&family=Noto+Serif+SC:wght@600;700;900&display=swap" rel="stylesheet">
    <style>
        /* 粘贴 CSS 变量 + 全局样式 + Editorial 样式 + 所需组件 */
    </style>
</head>
<body>
<div class="editorial-page">
    <div class="editorial-hero">
        <h1>报告标题</h1>
        <p class="subtitle">副标题或摘要</p>
    </div>
    <div class="editorial-module">
        <h2>章节一</h2>
        <div class="section-divider"></div>
        <div class="editorial-body">
            <p>正文内容...</p>
        </div>
    </div>
    <div class="editorial-module">
        <h2>章节二</h2>
        <div class="section-divider"></div>
        <div class="grid-2">
            <div class="card-light" style="padding: 24px; border-radius: 14px;">
                <h3>卡片标题</h3>
                <p>卡片内容</p>
            </div>
            <div class="card-light" style="padding: 24px; border-radius: 14px;">
                <h3>卡片标题</h3>
                <p>卡片内容</p>
            </div>
        </div>
    </div>
    <div class="editorial-footer">
        <p style="color: var(--ink-400); font-size: 13px;">总结或行动号召</p>
    </div>
</div>
</body>
</html>
```

### Dashboard 模式骨架

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>看板标题</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700;800;900&family=Noto+Serif+SC:wght@600;700;900&display=swap" rel="stylesheet">
    <style>
        /* 粘贴 CSS 变量 + 全局样式 + Dashboard 样式 + 所需组件 */
    </style>
</head>
<body>
<div class="dashboard-page">
    <div class="dashboard-header">
        <h1>看板标题</h1>
        <span class="badge" style="background: var(--mint-100); color: var(--mint-500);">运行中</span>
    </div>
    <div class="dashboard-status-bar">
        <div class="status-chip" style="background: var(--mint-50);">
            <span class="status-dot" style="background: var(--mint-500);"></span>
            <span>正常</span>
        </div>
    </div>
    <div class="dashboard-grid cols-4">
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <span class="dashboard-card-title">指标名称</span>
            </div>
            <div class="summary-value">1,234</div>
            <div class="summary-label">单位</div>
        </div>
    </div>
</div>
</body>
</html>
```

### Single 模式骨架

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>单页标题</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700;800;900&family=Noto+Serif+SC:wght@600;700;900&display=swap" rel="stylesheet">
    <style>
        /* 粘贴 CSS 变量 + 全局样式 + Single 样式 + 所需组件 */
    </style>
</head>
<body>
<div class="single-page">
    <div class="single-inner">
        <h1 style="font-family: 'Noto Serif SC', serif; font-size: 42px; font-weight: 900; margin-bottom: 20px;">单页标题</h1>
        <p style="font-size: 16px; color: var(--ink-500); line-height: 1.8;">内容描述</p>
    </div>
</div>
</body>
</html>
```

**使用说明**：
- Editorial 模式：适合 80% 的场景，长滚动阅读，章节清晰
- Dashboard 模式：适合数据汇总和状态监控
- Single 模式：适合信息量少的单页展示
- 所有模式均无动画效果，打印友好
