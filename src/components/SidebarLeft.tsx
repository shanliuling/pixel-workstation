'use client';

import { navItems } from '@/lib/mock';
import { AutoPxlIcon } from './AutoPxlIcon';
import { Home, Settings, ArrowRight, Play, Undo, Redo } from '@pxlkit/ui';
import { SpellBook, Scroll, QuestCompass, Chest, Elixir, Amulet } from '@pxlkit/gamification';
import { Sparkles } from '@pxlkit/feedback';

const pxlIcons = {
  House: Home,
  BookOpenText: SpellBook,
  ScrollText: Scroll,
  Sparkles: Sparkles,
  User: QuestCompass,
  Archive: Chest,
  FlaskConical: Elixir,
  Wrench: Settings,
};

export function SidebarLeft() {
  return (
    <aside className="flex flex-col h-full overflow-hidden p-1">
      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-1">
        {navItems.map((item) => {
          const PxlIcon = pxlIcons[item.icon as keyof typeof pxlIcons];
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center gap-4 transition-all group ${
                item.active 
                  ? 'pixel-panel-green bg-panel text-white shadow-sm' 
                  : 'px-4 py-3 hover:bg-text-secondary/10 rounded-sm'
              }`}
              style={item.active ? { padding: '4px 8px' } : undefined}
            >
              <div className="w-8 flex justify-center">
                {PxlIcon && (
                  <AutoPxlIcon 
                    icon={PxlIcon} 
                    size={16} 
                    appearance={item.active ? "solid" : "palette"} 
                    color={item.active ? "#ffffff" : undefined}
                  />
                )}
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-bold text-base tracking-wider">{item.label}</span>
                <span className={`text-[9px] tracking-widest ${item.active ? 'text-white/80' : 'text-text-secondary'}`}>
                  {item.labelEn}
                </span>
              </div>
              {item.active && (
                <AutoPxlIcon icon={ArrowRight} size={10} appearance="solid" color="#ffffff" className="mr-1" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Music Player */}
      <div className="pixel-panel-sm bg-panel mt-auto">
        <div className="p-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent-blue/20 border-2 border-text-primary rounded-sm flex items-center justify-center overflow-hidden shrink-0">
              <AutoPxlIcon icon={Amulet} size={20} appearance="palette" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs truncate">午後の时间</span>
              <span className="text-[10px] text-text-secondary truncate">Chillpeach</span>
            </div>
          </div>
          {/* Audio Waveform Mock */}
          <div className="flex items-center justify-between h-3 mb-2 px-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-accent-green opacity-80 rounded-full" 
                style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
              />
            ))}
          </div>
          {/* Controls */}
          <div className="flex items-center justify-center gap-4 text-text-primary pt-1">
            <button className="hover:text-accent-green transition-colors cursor-pointer">
              <AutoPxlIcon icon={Undo} size={14} appearance="solid" color="#3d352b" />
            </button>
            <button className="hover:text-accent-green transition-colors cursor-pointer">
              <AutoPxlIcon icon={Play} size={16} appearance="solid" color="#3d352b" />
            </button>
            <button className="hover:text-accent-green transition-colors cursor-pointer">
              <AutoPxlIcon icon={Redo} size={14} appearance="solid" color="#3d352b" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
