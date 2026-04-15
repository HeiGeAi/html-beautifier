# HTML Beautifier - 使用指南

## 安装方法

### 方法 1：直接下载 .skill 文件（推荐）

1. 从 [Releases](https://github.com/HeiGeAi/html-beautifier/releases) 下载最新的 `html-beautifier.skill` 文件
2. 将文件复制到 Claude Code 的 skills 目录：
   ```bash
   mkdir -p ~/.claude/skills
   cp html-beautifier.skill ~/.claude/skills/
   ```
3. 重启 Claude Code 或重新加载配置

### 方法 2：从源码安装

1. 克隆本仓库：
   ```bash
   git clone https://github.com/HeiGeAi/html-beautifier.git
   cd html-beautifier
   ```

2. 打包成 .skill 文件：
   ```bash
   tar -czf html-beautifier.skill SKILL.md references/
   ```

3. 安装到 Claude Code：
   ```bash
   cp html-beautifier.skill ~/.claude/skills/
   ```

## 基础使用

### 1. 最简单的用法

在 Claude Code 中直接输入：

```
/html-beautifier 把这段文字做成网页：
[粘贴你的内容]
```

AI 会自动：
- 分析内容类型
- 询问使用场景和风格
- 推荐最合适的布局模式
- 生成 HTML 文件

### 2. 从文件生成

```
/html-beautifier 把 report.md 做成网页
```

支持的文件格式：
- `.md` - Markdown 文件
- `.txt` - 纯文本文件
- `.csv` - 数据表格
- `.json` - JSON 数据
- 任何其他文本格式

### 3. 指定布局模式

```
/html-beautifier 用 Deck 模式把产品介绍做成幻灯片
```

四种模式：
- **Deck** - 幻灯片翻页式（适合演示）
- **Editorial** - 编辑式长滚动（适合报告）
- **Dashboard** - 看板式（适合数据总览）
- **Single** - 单页海报式（适合活动页）

### 4. 参考现有网页

```
/html-beautifier 参考 https://example.com 的设计，
把我们的介绍做得更好看
```

AI 会：
1. 分析参考网页的视觉特点
2. 提炼设计精髓
3. 用本系统的设计语言重构
4. 说明借鉴和创新点

## 进阶技巧

### 自定义风格组合

明确指定场景和风格：

```
/html-beautifier
场景：数据报告
风格：商务专业
模式：Dashboard
内容：[粘贴数据]
```

三种视觉风格：
- **商务专业** - 天空蓝/薄荷绿为主，稳重可靠
- **活力创意** - 多色搭配，年轻活泼
- **简约优雅** - 灰度为主，彩色点缀

### 批量处理

为多个文件生成 HTML：

```bash
# 方法 1：循环处理
for file in reports/*.md; do
  echo "/html-beautifier 把 $file 做成网页" | claude
done

# 方法 2：使用脚本
cat files.txt | while read file; do
  claude "/html-beautifier 把 $file 做成网页"
done
```

### 打印和导出

生成的 HTML 已优化打印效果：

1. **打印为 PDF**
   - 在浏览器中打开 HTML
   - Cmd/Ctrl + P 打印
   - 选择"另存为 PDF"
   - 建议设置：无页眉页脚，背景图形开启

2. **截图分享**
   - Deck 模式：每页单独截图
   - 其他模式：滚动截图工具（如 Snipaste）

3. **嵌入网站**
   - 直接上传 HTML 到服务器
   - 或使用 iframe 嵌入

## 常见问题

### Q: 生成的 HTML 可以修改吗？

A: 可以！所有样式都在 `<style>` 标签内，可以直接编辑：
- 修改 `:root` 中的 CSS 变量调整配色
- 修改 `body` 的 `font-family` 更换字体
- 修改内容区域的 HTML 结构

### Q: 为什么没有动画效果？

A: 本系统专注于静态视觉设计，原因：
- 打印友好（动画无法打印）
- 性能优化（大文件不卡顿）
- 截图分享（动画无法截图）

如需动画，可以手动添加 CSS `transition` 或 `animation`。

### Q: 可以自定义配色吗？

A: 可以！修改 `:root` 中的颜色变量：

```css
:root {
  --rose-500: #your-color;
  --mint-500: #your-color;
  /* ... 其他颜色 */
}
```

### Q: 支持暗色模式吗？

A: 当前版本专注于白底设计。如需暗色模式，可以：
1. 修改 `body` 的 `background` 和 `color`
2. 调整卡片的 `background` 和 `border`
3. 反转 `--ink-*` 系列颜色

### Q: 生成的文件太大怎么办？

A: 优化建议：
1. 使用本地字体替代 Google Fonts CDN
2. 压缩 HTML（移除空格和注释）
3. 如果有大量图片，考虑使用外部链接

### Q: 可以用于商业项目吗？

A: 可以！本项目采用 MIT 许可证，可自由用于商业和个人项目。

## 设计规范参考

### 配色使用建议

| 场景 | 推荐配色 | 避免 |
|------|---------|------|
| 数据报告 | 天空蓝 + 薄荷绿 | 玫瑰粉（过于柔和） |
| 产品介绍 | 薰衣草 + 蜜桃橙 | 全部六色混用 |
| 活动海报 | 玫瑰粉 + 奶油黄 | 灰度为主（缺乏活力） |
| 商务方案 | 天空蓝 + 奶油黄 | 高饱和度彩色 |

### 布局模式选择

| 内容特征 | 推荐模式 | 原因 |
|---------|---------|------|
| 5-10 个独立主题 | Deck | 每个主题一页，翻页节奏好 |
| 长篇分析文章 | Editorial | 连续阅读体验 |
| 多维度数据 | Dashboard | 一屏看全，信息密度高 |
| 单一主题海报 | Single | 视觉冲击力强 |

### 字体使用规范

- **大标题**（h1）：Noto Serif SC Bold（700-900），36-48px
- **小标题**（h2-h3）：Noto Sans SC Medium（500-600），24-32px
- **正文**：Noto Sans SC Regular（400），16-18px
- **数据/代码**：DM Sans，14-16px

## 技术细节

### 依赖项

- **字体**：Google Fonts CDN（Noto Sans SC, Noto Serif SC, DM Sans）
- **图标**：Font Awesome 6.5.1 CDN
- **其他**：无（纯 HTML + CSS）

### 浏览器兼容性

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- 移动端浏览器（iOS Safari, Chrome Mobile）

### 文件大小

- 典型输出：50-150 KB（取决于内容量）
- 包含完整 CSS 和内容的单文件
- 不包含图片（图片需外部链接）

## 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解版本更新历史。

## 获取帮助

- **GitHub Issues**: [提交问题](https://github.com/HeiGeAi/html-beautifier/issues)
- **讨论区**: [GitHub Discussions](https://github.com/HeiGeAi/html-beautifier/discussions)
- **微信**: 488137（添加请注明来意）

---

**祝你用得开心！如有问题随时反馈。**

Blake 黑哥
