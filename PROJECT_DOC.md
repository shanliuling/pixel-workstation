# PxlBlog (Pixel Art Web OS Blog) - 项目上下文与交接文档

## 1. 项目简介 (Project Overview)
本项目是一个基于 Next.js 15 (App Router) + React 19 + Tailwind CSS 构建的 Web 项目，旨在实现一个具有“像素风（Pixel Art）”和“伪桌面操作系统（Web OS）”体验的个人博客/展示页。项目大量使用了 `@pxlkit` 生态的 UI 组件、图标库和字体。

## 2. 核心技术栈 (Tech Stack)
- **框架:** Next.js 15 (App Router), React 19
- **样式:** Tailwind CSS
- **UI 库:** `@pxlkit/ui-kit` (包含像素风容器、面板、排版等)
- **图标:** `@pxlkit/icons` (像素级静态/动态图标，如 `PxlKitIcon`, `AnimatedPxlKitIcon`)
- **字体:** `zpix` (中文字体) + `PxlKit Mono` (数字/英文字体，来自 `@pxlkit`)
- **代码规范:** TypeScript, ESLint, Prettier

## 3. 已完成的核心架构与功能 (Current Status & Achievements)
我们已经完成了一个**无响应式拉伸变形**的“固定画幅”场景架构，使得网页在大屏幕和小屏幕上都能保持像素游戏般的完美比例缩放。

1. **容器缩放方案 (Layout Scaling):**
   - 采用固定 Aspect Ratio (例如 `1440 / 800` 或类似比例，具体依设计而定) 的容器。
   - 外层使用 Flex/Grid 居中包裹，内部场景进行等比缩放 (保持长宽比不变)，确保背景图和内部 UI **绝对不会被拉宽或压扁**。

2. **模块化 UI 结构 (UI Components):**
   - `TopBar`: 顶部系统状态栏，包含动态图标 (信号、电池、Wifi等)、当前时间以及操作系统的基础信息。
   - `SidebarLeft` / `SidebarRight`: 左右两侧侧边栏，用于展示用户信息、快捷方式、技能条、音频波形图 (拟物化) 和装饰性动效 (如 `FloatingSkull` 漂浮骷髅头)。
   - `MainContent`: 居中主内容区，用于展示核心信息或文章列表。
   - `BottomBar`: 底部操作栏/停靠栏。

3. **PxlKit 深度集成 (PxlKit Integration):**
   - **全局样式**: 在 `globals.css` 中引入了 `@pxlkit/ui-kit/styles.css`，并配置了 `zpix` 和 `PxlKit Mono` 的字体合并。
   - **图标修复**: 成功将项目中所有的占位图标替换为了真实的 `@pxlkit/icons`。处理了 TypeScript 类型冲突（如将 `FloatingSkull` 等复杂动效图标升级为使用 `AnimatedPxlKitIcon` 组件）。

4. **Git 与工程化修复:**
   - 解决了 VS Code 中由于未正确过滤 `.next` 和 `node_modules` 导致出现上万个待提交文件的 Git 缓存问题（已通过清理 Git 缓存和优化 `.gitignore` 彻底解决）。

## 4. 下一步开发计划 (Next Steps & TODOs)
换环境后，可以直接基于当前进度继续开发：

- [ ] **数据对接与渲染**: 替换 `mock.ts` 中的假数据，对接真实的博客文章 CMS 或 Markdown 文件解析系统。
- [ ] **交互与动画**: 为窗口添加拖拽、最小化/最大化等真实的 Web OS 交互体验。
- [ ] **业务页面补充**: 设计和实现“文章详情页”、“关于我”等具体子页面，保证在像素风窗口内嵌显示。
- [ ] **音效系统 (可选)**: 引入点击、开窗等 8-bit 复古像素音效，增强沉浸感。

## 5. 如何运行项目 (How to Run)
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build
```
