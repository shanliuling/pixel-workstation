'use client';

import { skills, techStack } from '@/lib/mock';
import { AutoPxlIcon } from './AutoPxlIcon';
import { Pencil, Package, Grid, Robot, ArrowRight } from '@pxlkit/ui';
import { Crown, Sword, FloatingGem, Chest, FloatingSkull } from '@pxlkit/gamification';
import { PixelFrame } from './PixelFrame';

const techIcons = {
  Code: Pencil,
  Atom: FloatingGem,
  Type: Grid,
  Box: Package,
  Database: Grid,
  Container: Chest,
  Cpu: Robot,
};

export function SidebarRight() {
  return (
    <aside className="flex flex-col gap-4 h-full overflow-y-auto custom-scrollbar p-1">
      {/* Status */}
      <PixelFrame bg="var(--bg-panel)">
        <div className="p-1">
          <h3 className="font-bold text-xs text-text-secondary tracking-widest mb-3">角色状态 / Status</h3>
          <div className="flex gap-3 items-center mb-4">
            <div className="w-12 h-12 bg-white border-2 border-text-primary rounded-sm flex items-center justify-center shadow-[1px_1px_0_var(--text-primary)] overflow-hidden shrink-0">
              <img src="/assets/status_avatar.png" alt="Status Avatar" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="font-bold w-6 shrink-0">HP</span>
                <div className="flex-1 h-1.5 bg-text-secondary/20"><div className="h-full bg-accent-green w-[96%]" /></div>
                <span className="w-8 text-right shrink-0">96/100</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="font-bold w-6 shrink-0">专注</span>
                <div className="flex-1 h-1.5 bg-text-secondary/20"><div className="h-full bg-accent-blue w-[64%]" /></div>
                <span className="w-8 text-right shrink-0">64/100</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="font-bold w-6 shrink-0">灵感</span>
                <div className="flex-1 h-1.5 bg-text-secondary/20"><div className="h-full bg-accent-gold w-[72%]" /></div>
                <span className="w-8 text-right shrink-0">72/100</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm">
            <AutoPxlIcon icon={Crown} size={16} appearance="palette" />
            <span>Lv.28 冒险者</span>
          </div>
        </div>
      </PixelFrame>

      {/* Skills */}
      <PixelFrame bg="var(--bg-panel)">
        <div className="p-1">
          <h3 className="font-bold text-xs text-text-secondary tracking-widest mb-3">技能树 / Skills</h3>
          <div className="flex flex-col gap-2">
            {skills.map((skill, i) => (
              <div key={skill.name} className="flex justify-between items-center group cursor-pointer hover:bg-text-secondary/5 p-0.5 rounded-sm transition-colors">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 border-2 border-text-primary bg-white flex items-center justify-center shadow-[1px_1px_0_var(--text-primary)] shrink-0">
                    <AutoPxlIcon icon={Sword} size={10} appearance="palette" />
                  </div>
                  <span className="font-bold text-xs truncate">{skill.name}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] font-bold text-text-secondary">Lv. {skill.level}</span>
                  <AutoPxlIcon icon={ArrowRight} size={10} appearance="solid" color="#8c8270" className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
            <a href="#" className="text-accent-blue text-[10px] flex items-center mt-1 hover:underline">
              查看更多 <AutoPxlIcon icon={ArrowRight} size={10} appearance="solid" color="#5b8bc6" className="ml-0.5" />
            </a>
          </div>
        </div>
      </PixelFrame>

      {/* Tech Stack */}
      <PixelFrame bg="var(--bg-panel)">
        <div className="p-1">
          <h3 className="font-bold text-xs text-text-secondary tracking-widest mb-3">技术栈 / Tech Stack</h3>
          <div className="grid grid-cols-4 gap-2.5">
            {techStack.map((tech) => {
              const PxlIcon = techIcons[tech.icon as keyof typeof techIcons];
              return (
                <div key={tech.name} className="flex flex-col items-center gap-0.5 group" title={tech.name}>
                  <div className="w-8 h-8 rounded-full border-2 border-text-primary bg-white flex items-center justify-center shadow-[1px_1px_0_var(--text-primary)] group-hover:-translate-y-0.5 transition-transform shrink-0">
                    {PxlIcon && <AutoPxlIcon icon={PxlIcon} size={16} appearance="palette" />}
                  </div>
                  <span className="text-[8px] font-bold tracking-wider text-center line-clamp-1">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </PixelFrame>

      {/* Today's Visitor */}
      <PixelFrame className="relative overflow-hidden" bg="var(--bg-panel)">
        <div className="p-1 min-h-[70px]">
          <h3 className="font-bold text-xs text-text-secondary tracking-widest mb-2">今日访客 / Today's Visitor</h3>
          <p className="text-xs font-bold relative z-10 leading-relaxed">嗨！我是小绿豆～<br/>喜欢旅行和收集星星！</p>
          <div className="absolute bottom-1 right-1 opacity-15 z-0">
            <AutoPxlIcon icon={FloatingSkull} size={48} appearance="palette" />
          </div>
        </div>
      </PixelFrame>
    </aside>
  );
}
