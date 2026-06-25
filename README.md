# 🛡️ Pixel Workstation (个人博客工作站)

一个高度定制化的“RPG 面板”风格个人博客工作站。
当前处于 MVP (Minimum Viable Product) 阶段，首要任务是完成高沉浸感的静态首页骨架搭建。

## 🛠️ 技术底座 (Tech Stack)

本项目采用绝对的 Schema-First 和极简主义原则构建：

- **核心框架**: Next.js (App Router) - 利用 SSG 保障首屏极致加载，为后期无缝切入 SSR 铺垫。
- **语言契约**: TypeScript + Zod - 前端只认 Schema，实现 UI 组件与真实数据源的绝对物理隔离。
- **样式方案**: Tailwind CSS + CSS Modules - 基础网格排版交由 Tailwind 极速搞定；核心的“像素面板拉伸 (9-Slice)”强视觉逻辑，通过 CSS Modules 纯净化封装。
- **全局状态**: Zustand (预留，用于音乐播放器等微交互)。

## 🗺️ 当前主线任务 (Current Quest)

**阶段一：首页静态骨架搭建**
- [x] 确立视觉架构与核心资产规范（9-Slice 边框切图范式）
- [x] 确立去后端化的静态纯前端技术栈
- [ ] 初始化 Next.js 14 底座
- [ ] 搭建 CSS Grid 全局非对称网格布局
- [ ] 封装工业级 `.pixelPanel` (基于 `border-image` 的 9宫格组件)
- [ ] 装载首页五大模块 (TopBar, SidebarLeft, SidebarRight, MainContent, BottomBar)

## 🎨 工程审美 (Design System)

本项目绝不妥协于传统的 Web UI 组件库（拒绝圆角、阴影等现代设计语言）。
所有的容器边框强制采用 CSS `image-rendering: pixelated` 配合原生的 `border-image` 技术，确保在任意拉伸下保持原汁原味的复古 1-bit 锯齿感。
