# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
