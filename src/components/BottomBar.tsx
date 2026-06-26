'use client';

import { announcements } from '@/lib/mock';
import { AutoPxlIcon } from './AutoPxlIcon';
import { Megaphone, Bell } from '@pxlkit/feedback';
import { SpellBook, Heart } from '@pxlkit/gamification';

const pxlIcons = {
  Radio: Megaphone,
  Bell: Bell,
  Book: SpellBook,
  Heart: Heart,
};

export function BottomBar() {
  return (
    <footer className="h-10 w-full mt-4 flex items-center justify-between px-4 overflow-hidden text-sm bg-panel border-2 border-text-primary rounded-sm shadow-[2px_2px_0_var(--text-primary)]">
       <div className="flex items-center gap-2 font-bold shrink-0 z-10 bg-panel pr-4">
         <AutoPxlIcon icon={Megaphone} size={16} appearance="palette" /> 系统公告：
       </div>
       
       <div className="flex-1 overflow-hidden relative h-full flex items-center">
         <div className="animate-marquee whitespace-nowrap flex items-center gap-16 absolute">
            {announcements.map((msg, i) => {
              const PxlIcon = pxlIcons[msg.icon as keyof typeof pxlIcons];
              return (
                <span key={i} className="flex items-center gap-2">
                  {PxlIcon && <AutoPxlIcon icon={PxlIcon} size={14} appearance="solid" color="#cfa853" />} {msg.text}
                </span>
              );
            })}
            {/* Duplicate for seamless looping */}
            {announcements.map((msg, i) => {
              const PxlIcon = pxlIcons[msg.icon as keyof typeof pxlIcons];
              return (
                <span key={`dup-${i}`} className="flex items-center gap-2">
                  {PxlIcon && <AutoPxlIcon icon={PxlIcon} size={14} appearance="solid" color="#cfa853" />} {msg.text}
                </span>
              );
            })}
         </div>
       </div>

       <div className="flex items-center gap-2 pl-4 shrink-0 font-bold text-xs z-10 bg-white/80">
         <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
         SYSTEM ONLINE &nbsp;|&nbsp; NETWORK OK
       </div>
    </footer>
  );
}
