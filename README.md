# HTML Beautifier

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Claude](https://img.shields.io/badge/Claude-Skill-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**多功能 HTML 美化系统 | Multi-Purpose HTML Beautification System**

将任何文件转换为专业级视觉化 HTML 页面

[快速开始](#快速开始-quick-start) • [在线演示](#在线演示) • [功能特性](#核心能力) • [使用指南](#使用指南)

</div>

---

## 这是什么？What is this?

一个为 Claude Code 设计的 HTML 美化 skill，能将任何输入内容（文本、Markdown、数据、报告）转换为高品质的视觉化 HTML 页面。

**不是**简单的 Markdown 转 HTML 工具，而是一套完整的视觉设计系统：
- ✅ 四种专业布局模式（幻灯片/长滚动/看板/单页）
- ✅ 完整的马卡龙色系设计语言
- ✅ 生成前与用户确认风格和场景
- ✅ 支持参考学习现有网页并创新
- ✅ 纯静态单文件输出，零依赖

**适用场景**：方案展示、数据报告、产品介绍、PPT 替代、内容可视化、活动海报

---

## 为什么需要它？Why this matters?

### 解决的问题

| 传统方式 | HTML Beautifier |
|---------|-----------------|
| Markdown 转 HTML 样式单调 | 四种专业布局模式，视觉品质接近设计师产出 |
| PPT 制作耗时，难以分享 | 一键生成可打印、可截图的 HTML 幻灯片 |
| 数据报告缺乏视觉冲击力 | 自动选择最佳布局，卡片化呈现信息 |
| 需要设计师参与才能做出好看的页面 | AI 自动生成专业级视觉设计 |
| 参考网页但不知如何实现 | 支持视觉拆解和创新重构 |

### 核心差异点

1. **交互式确认**：生成前询问使用场景和风格偏好，避免返工
2. **多模式智能选择**：根据内容特征自动推荐最合适的布局
3. **参考学习能力**：能从现有网页提炼精髓并用自己的设计语言重构
4. **专业级输出**：完整的设计系统（配色、字体、组件、模板）

---

## 核心能力 Core Capabilities

### 🎨 四种布局模式

#### 1. Deck（幻灯片翻页式）
**适用于**：方案展示、pitch deck、产品介绍
- scroll-snap 全屏翻页
- 10 种标准页面模板（封面/关于/挑战/解决方案/数据/功能/目录/旅程/验证/联系）
- 页码标注，打印友好

#### 2. Editorial（编辑式长滚动）
**适用于**：分析报告、复盘总结、深度内容
- 连续滚动阅读体验
- 模块间有明确分界
- 适合内容量大的场景

#### 3. Dashboard（看板/仪表盘式）
**适用于**：数据总览、项目状态、多维信息汇总
- 单屏或少量滚动
- 信息密度高，卡片网格排列
- 一眼看全貌

#### 4. Single（单页海报式）
**适用于**：活动海报、单页简历、产品单页
- 一页搞定，居中排版
- 强视觉冲击力

### 🎨 马卡龙六色设计系统

| 色名 | 主色 | 用途 |
|------|------|------|
| 玫瑰粉 | #e8889a | 强调、警示 |
| 薄荷绿 | #6bc4a6 | 正向、完成 |
| 薰衣草 | #a78bda | 品牌、引导 |
| 奶油黄 | #e4c56a | 提醒、金色调 |
| 天空蓝 | #7ab4d9 | 信息、数据 |
| 蜜桃橙 | #e8a87c | 温暖、活力 |

每色三级：主色（-500）、浅底（-100）、极浅底（-50）

### 🧩 六大核心组件

1. **card-light**：白底卡片，万能信息容器
2. **gt-渐变文字**：标题强调词渐变色
3. **section-divider**：章节标题下方渐变短线
4. **badge**：药丸标签，分类标识
5. **num-dot**：编号圆点，列表序号
6. **icon-box**：方形圆角图标框

---

## 快速开始 Quick Start

### TL;DR

```bash
# 1. 下载 skill 文件
curl -O https://github.com/HeiGeAi/html-beautifier/releases/latest/download/html-beautifier.skill

# 2. 在 Claude Code 中安装
# 将 html-beautifier.skill 放到 ~/.claude/skills/ 目录

# 3. 使用
# 在 Claude Code 中输入：
/html-beautifier 把这个报告做成网页
```

### 最短路径

1. **安装 skill**
   ```bash
   mkdir -p ~/.claude/skills
   cp html-beautifier.skill ~/.claude/skills/
   ```

2. **准备内容**
   - 直接提供文本内容
   - 或指定文件路径（.txt, .md, .csv, .json 等）
   - 或提供参考网页 URL

3. **调用 skill**
   ```
   /html-beautifier 把这个季度报告做成网页
   ```

4. **确认风格**
   - AI 会询问使用场景（方案展示/数据报告/看板/海报）
   - 选择视觉风格（商务专业/活力创意/简约优雅）
   - 是否需要参考现有网页

5. **获取输出**
   - 单文件 HTML 保存到桌面 claudecode 输出文件夹
   - 可直接打开、打印、截图或分享

---

## 使用指南 Usage Guide

### 基础用法

#### 场景 1：将 Markdown 文件美化为 HTML

```
/html-beautifier 把 project-report.md 做成网页
```

AI 会：
1. 读取文件内容
2. 询问使用场景（建议选"数据报告"）
3. 询问视觉风格（建议选"商务专业"）
4. 自动选择 Editorial 或 Dashboard 模式
5. 生成 HTML 文件

#### 场景 2：制作产品介绍幻灯片

```
/html-beautifier 把这段产品介绍做成 PPT 风格的网页：
[粘贴产品介绍文本]
```

AI 会：
1. 分析内容结构
2. 建议使用 Deck 模式
3. 生成 5-10 页幻灯片式 HTML
4. 支持 scroll-snap 翻页效果

#### 场景 3：参考学习现有网页

```
/html-beautifier 参考 https://example.com 的设计风格，
把我们的公司介绍做成更好看的版本
```

AI 会：
1. 读取参考网页
2. 进行视觉拆解（节奏、卡片、留白、配色）
3. 提炼精髓后用本系统的设计语言重构
4. 说明借鉴了什么、创新了什么

### 高级用法

#### 自定义风格组合

```
/html-beautifier 
场景：数据看板
风格：活力创意
内容：[粘贴数据]
要求：使用 Dashboard 模式，突出关键指标
```

#### 批量生成

```bash
# 为多个 Markdown 文件生成 HTML
for file in reports/*.md; do
  echo "/html-beautifier 把 $file 做成网页" | claude
done
```

---

## 项目结构 Project Structure

```
html-beautifier/
├── SKILL.md                    # Skill 主文件（Claude Code 读取）
├── references/                 # 参考文档
│   ├── design-system.md       # 完整 CSS 组件库和设计系统
│   ├── visual-learning-guide.md # 视觉学习指南
│   └── quality-checklist.md   # 质量验收清单
├── examples/                   # 示例文件
│   └── demo.html              # 演示页面
└── README.md                   # 本文件
```

---

## 在线演示

查看 [examples/demo.html](examples/demo.html) 了解输出效果。

这是一个 6 页的 Deck 模式示例，展示了：
- 封面页（品牌 + 标语）
- 特点介绍（四种布局模式）
- 数据展示（关键指标）
- 模式对比（四种模式详解）
- 场景应用（使用案例）
- 结束页（联系方式）

---

## 设计规范速览

### 配色原则
- 白底页面中，彩色只做点缀和浅面层
- 商务风格优先使用天空蓝/薄荷绿/奶油黄
- 活力风格可使用全部六色，但每页主色不超过 3 种

### 字体
- 中文正文：Noto Sans SC（300-900）
- 中文标题：Noto Serif SC（600-900）
- 英文/数据：DM Sans
- 图标：Font Awesome 6.5

### 严格禁止
- ❌ 任何 CSS 动画（animation / transition）
- ❌ 任何 JavaScript 交互逻辑
- ❌ hover 效果（打印时不可见）
- ❌ 使用 emoji（统一用 Font Awesome 图标）
- ❌ 大段文字堆砌（必须通过卡片结构承载）

---

## 质量验收 Quality Checklist

生成的 HTML 应满足：
- ✅ 首屏 3 秒内能看出页面主题
- ✅ 卡片体系统一（圆角、阴影、标签语言一致）
- ✅ 白底干净，彩色只做层次点缀
- ✅ 模块间有明确边界和节奏感
- ✅ 打印预览无空白、无缺失
- ✅ 响应式适配（移动端可读）
- ✅ 单文件输出，无外部依赖（除 CDN 字体和图标）

---

## 版本历史 Version History

### v1.0.0 (2024-04-15)
- 🎉 首次发布
- ✅ 支持四种布局模式（Deck/Editorial/Dashboard/Single）
- ✅ 完整的马卡龙六色设计系统
- ✅ 交互式风格确认流程
- ✅ 参考学习和视觉拆解能力
- ✅ 完整的组件库和模板代码

---

## 许可证 License

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 贡献 Contributing

欢迎提交 Issue 和 Pull Request！

如果你有好的设计建议或发现了 bug，请：
1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

---

## 📧 联系方式 Contact

- **Author**: Blake 黑哥
- **WeChat**: 488137
- **GitHub**: [@HeiGeAi](https://github.com/HeiGeAi)

---

## 🙏 致谢 Acknowledgments

本项目整合了以下资源的精华：
- [Anthropic Skills - frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) - 设计系统基础
- 多个商业产品的视觉设计实践
- Claude Code 社区的反馈和建议

感谢所有为开源社区做出贡献的开发者和设计师！

---

<div align="center">

**如果这个项目对你有帮助，请给个 ⭐️ Star 支持一下！**

Made with ❤️ by Blake 黑哥

</div>
