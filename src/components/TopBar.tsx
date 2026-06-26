'use client';

import { topBarStats } from '@/lib/mock';
import { PxlKitIcon } from '@pxlkit/core';
import { PixelBadge } from '@pxlkit/ui-kit';
import { Calendar, Package, Check, Clock } from '@pxlkit/ui';
import { Star } from '@pxlkit/gamification';

const pxlIcons = {
  CheckSquare: Check,
  Clock: Clock,
  CalendarDays: Calendar,
  Inbox: Package,
};

export function TopBar() {
  return (
    <header className="flex items-center justify-between py-3 px-4 w-full shrink-0">
      {/* Logo & Title */}
      <div className="flex items-center gap-4 pl-2">
        <div className="w-12 h-12 bg-white border-2 border-text-primary flex items-center justify-center p-1 rounded-sm shadow-[2px_2px_0_var(--text-primary)] header-logo shrink-0">
          <img src="/assets/cat.png" alt="Cat Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <div className="flex items-end gap-2">
            <h1 className="text-xl font-bold tracking-widest text-text-primary">ANTHONY.EXE</h1>
            <PixelBadge tone="green" variant="solid" className="px-1 py-0.5 text-[10px]">Lv.28</PixelBadge>
          </div>
          <p className="text-xs text-text-secondary mt-1 tracking-wider uppercase">Personal Blog Workstation</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8">
        {topBarStats.map((stat) => {
          const PxlIcon = pxlIcons[stat.icon as keyof typeof pxlIcons];
          return (
            <div key={stat.label} className="flex flex-col items-center border-l-2 border-text-secondary/20 border-dotted pl-8 first:border-0 first:pl-0">
              <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-1">
                {PxlIcon && <PxlKitIcon icon={PxlIcon} size={12} appearance="solid" color="#8c8270" />}
                <span>{stat.label}</span>
              </div>
              <div className="font-bold text-sm tracking-wider">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Weather & Time */}
      <div className="flex items-center gap-6 pr-4 border-l-2 border-text-secondary/20 border-dashed pl-8">
        <div className="flex items-center gap-2">
          <PxlKitIcon icon={Star} size={20} appearance="palette" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">24°C</span>
            <span className="text-[10px] text-text-secondary tracking-widest">晴朗 Sunny</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-bold text-2xl leading-none">09:41</span>
          <span className="text-[10px] text-text-secondary tracking-widest mt-1">06 / 24 周二</span>
        </div>
      </div>
    </header>
  );
}
