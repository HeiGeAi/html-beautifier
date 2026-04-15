# HTML Beautifier

一个跨平台通用的 HTML 美化系统，将任何内容转换为专业级视觉化页面。

## 核心特性

### 三种布局模式
- Editorial（长滚动）- 适合报告、分析、方案展示
- Dashboard（看板）- 适合数据汇总、状态监控
- Single（单页）- 适合活动公告、单页简介

### 马卡龙六色设计系统
- 玫瑰粉 #e8889a - 强调、警示
- 薄荷绿 #6bc4a6 - 正向、完成
- 薰衣草 #a78bda - 品牌、引导
- 奶油黄 #e4c56a - 提醒、金色调
- 天空蓝 #7ab4d9 - 信息、数据
- 蜜桃橙 #e8a87c - 温暖、活力

### 核心组件
- card-light - 白底卡片，万能信息容器
- gt-渐变文字 - 标题强调词渐变色
- section-divider - 章节标题下方渐变短线
- badge - 药丸标签，分类标识
- num-dot - 编号圆点，列表序号
- icon-box - 方形圆角图标框

## 使用方式

### 快速开始
```bash
/html-beautifier 把这个报告做成网页
```

### 安装方法
```bash
mkdir -p ~/.claude/skills
curl -L https://github.com/HeiGeAi/html-beautifier/releases/download/v1.2.0/html-beautifier.skill \
  -o ~/.claude/skills/html-beautifier.skill
```

## 支持平台

### 完全支持
- Claude Code - 原生支持，完整功能
- Cursor - 文件读写 + 用户交互
- Windsurf - 文件读写 + 用户交互
- Cline - 文件读写 + 用户交互

### 基础支持
- Aider - 文件读写，文本交互
- OpenClaw - 文件读写，文本交互
- Hermes - 文件读写，文本交互

### 手动模式
- ChatGPT - 通过 Custom Instructions 使用
- Claude.ai - 通过 Projects 或 Prompt 使用

## 设计理念

「卡片即信息容器，留白即呼吸感，节奏即叙事力」

所有内容通过精心设计的卡片、标签、图标组合来承载，不堆砌文字。
每一个模块都是一张完整的视觉海报，有清晰的信息层次。

## 输出特点

- 单文件 HTML，所有 CSS 内联
- 零依赖（仅 CDN 字体和图标）
- 无动画效果，打印友好
- 打开即为最终呈现效果
- 响应式设计，支持移动端

## 版本信息

当前版本：v1.2.0
发布日期：2024-04-15
作者：Blake 黑哥
许可证：MIT License

## 相关链接

- GitHub: https://github.com/HeiGeAi/html-beautifier
- 文档: https://github.com/HeiGeAi/html-beautifier#readme
- 问题反馈: https://github.com/HeiGeAi/html-beautifier/issues
