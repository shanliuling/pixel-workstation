import type {
  NavItem,
  TopBarStat,
  PostItem,
  LogEntry,
  SkillItem,
  TechStackItem,
} from './schema';

export const navItems: NavItem[] = [
  { id: 'home', label: '首页', labelEn: 'HOME', icon: 'House', href: '/', active: true },
  { id: 'quest-log', label: '文章管理', labelEn: 'QUEST LOG', icon: 'BookOpenText', href: '/posts' },
  { id: 'story-scroll', label: '阅读记录', labelEn: 'STORY SCROLL', icon: 'ScrollText', href: '/reading' },
  { id: 'inspiration', label: '灵感库', labelEn: 'INSPIRATION', icon: 'Sparkles', href: '/inspiration' },
  { id: 'about', label: '关于我', labelEn: 'ABOUT ME', icon: 'User', href: '/about' },
  { id: 'archive', label: '归档存档', labelEn: 'ARCHIVE', icon: 'Archive', href: '/archive' },
  { id: 'lab', label: '归验室', labelEn: 'LABORATORY', icon: 'FlaskConical', href: '/lab' },
  { id: 'toolbox', label: '工具箱', labelEn: 'TOOLBOX', icon: 'Wrench', href: '/tools' },
];

export const topBarStats: TopBarStat[] = [
  { icon: 'CheckSquare', label: '今日进度', value: '3 / 5' },
  { icon: 'Clock', label: '专注时长', value: '2h 45m' },
  { icon: 'CalendarDays', label: '连续更新', value: '7 days' },
  { icon: 'Inbox', label: '草稿箱', value: '12 篇待整理' },
];

export const latestPosts: PostItem[] = [
  { id: '1', title: '为什么不想做刻板的二次元 UI 设计', tag: '设计', tagColor: 'cyan', readTime: '8 min read', date: '06-24' },
  { id: '2', title: '个人博客工作站的系统架构设计', tag: '技术', tagColor: 'purple', readTime: '12 min read', date: '06-21' },
  { id: '3', title: '我的前端学习路线 (2026 版)', tag: '学习', tagColor: 'green', readTime: '15 min read', date: '06-18' },
  { id: '4', title: 'AI 如何改变我的开发工作流', tag: 'AI', tagColor: 'gold', readTime: '10 min read', date: '06-17' },
];

export const todayLogs: LogEntry[] = [
  { text: '写了一篇新文章', exp: 120, done: true },
  { text: '完善了博客系统设计', exp: 80, done: true },
  { text: '学习了 AI Agent 相关知识', exp: 60, done: true },
  { text: '阅读：《设计的设计》', exp: 40, done: true },
];

export const skills: SkillItem[] = [
  { name: '前端开发', level: 8 },
  { name: 'UI 设计', level: 7 },
  { name: '写作表达', level: 6 },
  { name: 'AI 工作流', level: 5 },
  { name: '产品思维', level: 5 },
];

export const techStack: TechStackItem[] = [
  { name: 'Frontend', icon: 'Code' },
  { name: 'React', icon: 'Atom' },
  { name: 'TypeScript', icon: 'Type' },
  { name: 'Node', icon: 'Box' },
  { name: 'Database', icon: 'Database' },
  { name: 'Docker', icon: 'Container' },
  { name: 'AI Workflow', icon: 'Cpu' },
];

export const announcements = [
  { icon: 'Bell', text: '博客系统 2.0 已上线！新增夜间模式与阅读进度追踪，欢迎体验～' },
  { icon: 'Book', text: '正在阅读：《设计的设计》34%' },
  { icon: 'Heart', text: '保持热爱，继续创造！ ✨' },
];
