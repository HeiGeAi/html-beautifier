# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-04-18

### Added（反向锚定）
- ✨ SKILL.md 新增「密度基准」章节，给出卡片密度、布局密度、章节密度、首屏密度四组硬约束
- ✨ 严格禁止列表新增 4 条反密度反模式：信息密度不足 / padding 堆叠 / 密度倒挂 / section-head 垂直占位超 100px
- ✨ quality-checklist.md 新增 B2 信息密度自检章节，包含 7 项具体检查点
- ✨ 致命项从 5 条扩展到 6 条，信息密度不足列入必检项
- ✨ design-system.md 顶部增加「密度硬规则」速查表，9 行参数基准一览

### Changed（参数收紧）
- 🔄 editorial-hero padding: `80px 0 48px` → `56px 0 36px`（Hero 不再占满首屏）
- 🔄 editorial-module padding: `40px 0` → `32px 0`
- 🔄 editorial-footer padding: `48px 0` → `32px 0`
- 🔄 section-page padding: `40px 48px` → `32px 40px`
- 🔄 dashboard-card padding: `20px 24px` → `16px 20px`
- 🔄 dashboard-grid gap: `16px` → `12px`
- 🔄 grid-4 gap: `16px` → `12px`
- 🔄 grid-3 gap: `16px` → `14px`
- 🔄 grid-5 gap: `12px` → `10px`
- 🔄 grid-2-1 / grid-1-2 gap: `20px` → `18px`
- 🔄 card-light 新增默认 padding `18px 20px` 和 border-radius `14px`，不再需要每次 inline 写

### Changed（指南语义重构）
- 📝 核心理念从「留白即呼吸感」改为「密度即专业感」，反向锚定信息承载量
- 📝 严格禁止删除「大段文字堆砌」（这一条与密度要求冲突）
- 📝 quality-checklist 代码搜索清单新增 padding/gap 过大检测

### Changed（示例同步）
- 🎨 重写 `examples/demo.html` 为 v1.3.0 密度优化版
- 🎨 demo 新增 hero-stats 数据条（首屏多 4 项数据）
- 🎨 demo 新增深色对比数据段（节奏变化点）
- 🎨 demo 所有卡片从"icon + 标题 + 描述"3 层扩展到 5 层（增加 mini-tags 和 Before/After meta）
- 🎨 硬约束列表从 4+4 扩展到 6+6，覆盖新密度规则

### Version Bump
- 📦 SKILL.md / README.md / skill-intro-content.md 版本号统一升级到 v1.3.0

## [1.2.2] - 2026-04-16

### Fixed
- 修复 `SKILL.md`、`README.md`、官方示例中的 Deck / scroll-snap 残留描述
- 修复 `references/design-system.md` 中误写的 Dashboard 骨架
- 修复官方介绍页和文案源中的旧版本号、旧发布日期与旧下载链接

### Changed
- 重写 `examples/demo.html`，与当前三模式静态体系保持一致
- 更新官方介绍页顶部视觉图，移除旧版本徽标干扰
- 统一正式文档、示例和发布素材到 `v1.2.2`

## [1.2.1] - 2026-04-16

### Added
- ✨ 新增官方介绍页面模板 `examples/skill-introduction.html`
- 📄 完整展示 Editorial 模式的使用方法
- 🎨 演示所有核心组件和马卡龙色系
- 📚 可作为产品介绍页面的参考模板

## [1.2.0] - 2024-04-15

### Changed
- 🔄 移除 Deck（幻灯片）模式，简化为三种布局模式
- 🔄 移除所有动画效果（transition、animation、scroll-snap）
- 🔄 优化打印友好性，确保打印即最终呈现效果
- 📝 更新文档，移除 Deck 相关内容
- 📝 精简 design-system.md，从 1188 行减少到 866 行

### Removed
- ❌ Deck 模式及其 10 种页面模板
- ❌ scroll-snap 翻页效果
- ❌ 所有 CSS 动画和过渡效果
- ❌ hover 交互效果

### Improved
- ✅ Editorial 模式成为默认推荐（适合 80% 场景）
- ✅ 所有输出均为静态页面，无动画干扰
- ✅ 打印效果与屏幕显示完全一致
- ✅ 更简洁的组件库和模板

## [1.1.0] - 2024-04-15

### Added
- ✅ 跨平台兼容性支持（Cross-platform compatibility）
- ✅ 支持 Claude Code, Cursor, Windsurf, Cline, Aider, OpenClaw, Hermes 等多平台
- ✅ 多平台安装指南（Installation guides for multiple platforms）
- ✅ 平台兼容性对比表格（Platform compatibility comparison table）
- ✅ 手动模式支持 ChatGPT 和 Claude.ai（Manual mode for ChatGPT and Claude.ai）

### Changed
- 📝 更新 README 为双语格式（Updated README to bilingual format）
- 📝 优化文档结构，参考 opc-team 项目风格（Optimized documentation structure）
- 📝 添加详细的使用指南 USAGE.md（Added detailed usage guide）

### Documentation
- 新增 LICENSE 文件（MIT License）
- 新增 .gitignore 配置
- 新增 examples/ 目录和演示文件

## [1.0.0] - 2024-04-15

### Added
- 🎉 Initial release of HTML Beautifier
- ✅ Four layout modes: Deck, Editorial, Dashboard, Single
- ✅ Complete macaron color system (6 colors × 3 levels)
- ✅ Interactive style confirmation workflow
- ✅ Reference learning and visual deconstruction capability
- ✅ Complete component library with 6 core components
- ✅ 10 standard page templates for Deck mode
- ✅ Quality checklist for output validation
- ✅ Print-friendly CSS with @media print support
- ✅ Responsive design for mobile devices
- ✅ Single-file HTML output with zero dependencies (except CDN fonts/icons)

### Design System
- Macaron color palette: Rose, Mint, Lavender, Butter, Sky, Peach
- Typography: Noto Sans SC, Noto Serif SC, DM Sans
- Icons: Font Awesome 6.5
- Components: card-light, gradient-text, section-divider, badge, num-dot, icon-box

### Documentation
- Complete SKILL.md with usage instructions
- Design system reference (design-system.md)
- Visual learning guide (visual-learning-guide.md)
- Quality checklist (quality-checklist.md)
- README with quick start and examples
- USAGE guide with advanced tips

### Examples
- Demo HTML showcasing all features
- 6-page Deck mode example with various components

---

## [Unreleased]

### Planned Features
- [ ] Dark mode support
- [ ] More page templates for Editorial / Dashboard / Single
- [ ] Custom color theme generator
- [ ] Image optimization and lazy loading
- [ ] Multi-language support (English, Japanese)
- [ ] Export to PDF directly (without browser print)
- [ ] Interactive preview mode (optional)

### Under Consideration
- [ ] Integration with popular design tools (Figma, Sketch)
- [ ] Template marketplace
- [ ] CLI tool for batch processing
- [ ] VS Code extension

---

## Version History

### v1.0.0 (2024-04-15)
First stable release with complete feature set.

---

**Note**: This project follows semantic versioning. Breaking changes will increment the major version.
