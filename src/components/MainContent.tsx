'use client';

import { latestPosts, todayLogs } from '@/lib/mock';
import { AutoPxlIcon } from './AutoPxlIcon';
import { PixelFrame } from './PixelFrame';
import { PixelBadge, PixelProgress } from '@pxlkit/ui-kit';
import { Pencil, ArrowRight, Check, Clock } from '@pxlkit/ui';
import { QuestCompass, Scroll, QuestMap } from '@pxlkit/gamification';
import { Sparkles } from '@pxlkit/feedback';

export function MainContent() {
  return (
    <main className="flex flex-col gap-3 flex-1 h-full w-full overflow-hidden">
      {/* Hero Banner */}
      <div className="w-full aspect-[1200/380] relative overflow-hidden rounded-md shrink-0 select-none bg-[#fdf5e6]">
        {/* Background Image (Base Empty Room) */}
        <img src="/assets/room.png" alt="Room Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        
        {/* Welcome Text Overlay - positioned exactly inside the whiteboard */}
        <div className="absolute left-[8%] top-[6%] w-[38%] h-[82%] z-20 flex flex-col justify-between py-2 min-w-0">
          <div className="min-w-0">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold flex items-center gap-2 text-text-primary leading-tight">
              欢迎回来，冒险者！ <AutoPxlIcon icon={Sparkles} size={20} appearance="palette" className="shrink-0" />
            </h2>
            <div className="text-text-secondary text-[10px] lg:text-xs xl:text-sm mt-1.5 space-y-0.5 font-medium leading-normal">
              <p className="truncate">记录想法，构建属于自己的世界。</p>
              <p className="truncate">一步一行代码，慢慢把想法变成实现。</p>
            </div>
          </div>
          
          <div className="flex gap-2.5 xl:gap-4 mt-2 shrink-0">
            <button className="bg-accent-green text-white font-bold text-xs xl:text-sm px-4 xl:px-5 py-1.5 xl:py-2 border-2 border-text-primary shadow-[2px_2px_0_rgba(0,0,0,0.15)] flex items-center gap-1.5 hover:translate-y-px hover:shadow-[1px_1px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer">
              <AutoPxlIcon icon={Pencil} size={14} appearance="solid" color="#ffffff" /> 开始创作
            </button>
            <button className="bg-panel text-text-primary font-bold text-xs xl:text-sm px-4 xl:px-5 py-1.5 xl:py-2 border-2 border-text-primary shadow-[2px_2px_0_rgba(0,0,0,0.15)] flex items-center gap-1.5 hover:translate-y-px hover:shadow-[1px_1px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer">
              <AutoPxlIcon icon={QuestCompass} size={14} appearance="solid" color="#3d352b" /> 关于我
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 min-h-0 w-full">
        <div className="grid grid-cols-5 gap-3 flex-1 min-h-0 w-full">
          {/* Latest Posts */}
          <div className="col-span-3 h-full overflow-hidden flex flex-col min-h-0">
            <PixelFrame className="flex-1 flex flex-col overflow-hidden min-h-0" bg="var(--bg-panel)">
              <div className="h-full flex flex-col min-h-0">
                <div className="flex justify-between items-center mb-3 border-b-2 border-text-secondary/20 border-dashed pb-2 shrink-0">
                  <h3 className="font-bold text-sm tracking-wider">最新文章 / Latest Posts</h3>
                  <a href="#" className="text-accent-blue text-xs flex items-center hover:underline">
                    查看更多 <AutoPxlIcon icon={ArrowRight} size={12} appearance="solid" color="#5b8bc6" className="ml-0.5" />
                  </a>
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar flex-1 pr-1">
                  {latestPosts.map((post) => (
                    <div key={post.id} className="pixel-panel-xs p-2 flex gap-3 group cursor-pointer hover:-translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,0.15)] transition-all">
                      <div className="w-10 h-10 bg-text-secondary/10 border-2 border-text-primary/20 rounded-sm shrink-0 flex items-center justify-center overflow-hidden">
                        <AutoPxlIcon icon={Scroll} size={20} appearance="palette" className="group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex flex-col justify-center w-full min-w-0">
                        <h4 className="font-bold text-xs text-text-primary group-hover:text-accent-blue transition-colors truncate">{post.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <PixelBadge tone="cyan" variant="soft" className="text-[9px] px-1 py-0.5">{post.tag}</PixelBadge>
                          <div className="flex items-center gap-2 text-[10px] text-text-secondary">
                            <span className="flex items-center gap-0.5">
                              <AutoPxlIcon icon={Clock} size={10} appearance="solid" color="#8c8270" /> {post.readTime}
                            </span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PixelFrame>
          </div>

          {/* Right Column inside Grid: Logs & Quest */}
          <div className="col-span-2 flex flex-col gap-3 h-full overflow-hidden min-h-0">
            {/* Today's Log */}
            <PixelFrame className="flex-1 flex flex-col overflow-hidden min-h-0" bg="var(--bg-panel)">
              <div className="p-1 h-full flex flex-col min-h-0">
                <div className="flex justify-between items-center mb-3 border-b-2 border-text-secondary/20 border-dashed pb-2 shrink-0">
                  <h3 className="font-bold text-sm tracking-wider">今日记录 / Today's Log</h3>
                  <a href="#" className="text-accent-blue text-xs flex items-center hover:underline">
                    查看更多 <AutoPxlIcon icon={ArrowRight} size={12} appearance="solid" color="#5b8bc6" className="ml-0.5" />
                  </a>
                </div>
                <div className="flex flex-col gap-1.5 overflow-y-auto custom-scrollbar flex-1 pr-1">
                  {todayLogs.map((log, i) => (
                    <div key={i} className="pixel-panel-xs p-1.5 flex items-center justify-between hover:-translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,0.15)] transition-all text-xs">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-3.5 h-3.5 border-2 border-accent-green bg-accent-green/20 flex items-center justify-center shrink-0">
                          {log.done && <AutoPxlIcon icon={Check} size={10} appearance="solid" color="#5c9e69" />}
                        </div>
                        <span className={log.done ? 'text-text-primary line-through decoration-text-secondary/50 truncate' : 'text-text-primary truncate'}>{log.text}</span>
                      </div>
                      <span className="text-accent-green font-bold text-[10px] tracking-wider shrink-0">+{log.exp} EXP</span>
                    </div>
                  ))}
                </div>
              </div>
            </PixelFrame>

            {/* Current Quest */}
            <PixelFrame className="shrink-0" bg="var(--bg-panel)">
              <div className="p-1">
                <h3 className="font-bold text-sm tracking-wider mb-2 border-b-2 border-text-secondary/20 border-dashed pb-2">当前任务 / Current Quest</h3>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-white border-2 border-text-primary rounded-sm flex items-center justify-center shrink-0">
                    <AutoPxlIcon icon={QuestMap} size={20} appearance="palette" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="font-bold truncate">构建更好的个人数字花园</span>
                      <span className="text-xs font-bold text-accent-green">65%</span>
                    </div>
                    <div className="h-2.5">
                      <PixelProgress value={65} tone="green" />
                    </div>
                    <p className="text-[10px] text-text-secondary mt-1">下一步：优化阅读体验 ✨</p>
                  </div>
                </div>
              </div>
            </PixelFrame>
          </div>
        </div>
        
        {/* Recent Activity */}
        <PixelFrame bg="var(--bg-panel)">
          <div className="p-0.5 flex justify-between items-center text-xs">
            <div className="flex items-center gap-3">
              <h3 className="font-bold tracking-wider border-r-2 border-text-secondary/20 pr-3">最近动态 / Recent Activity</h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="text-text-secondary truncate">发布了新文章《为什么不想做刻板的二次元 UI 设计》</span>
              </div>
            </div>
            <span className="text-text-secondary shrink-0">2分钟前</span>
          </div>
        </PixelFrame>
      </div>
    </main>
  );
}
