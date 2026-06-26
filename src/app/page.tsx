import { TopBar } from '@/components/TopBar';
import { SidebarLeft } from '@/components/SidebarLeft';
import { MainContent } from '@/components/MainContent';
import { SidebarRight } from '@/components/SidebarRight';
import { BottomBar } from '@/components/BottomBar';

export default function Home() {
  return (
    <div className="h-screen w-screen p-3 flex flex-col gap-3 overflow-hidden bg-parchment">
      {/* Top Bar Panel */}
      <div className="pixel-panel shrink-0 bg-panel z-10">
        <TopBar />
      </div>

      {/* Main Row */}
      <div className="flex-1 flex gap-3 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[240px] shrink-0 flex flex-col gap-3">
          <SidebarLeft />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <MainContent />
        </div>

        {/* Right Sidebar */}
        <div className="w-[300px] shrink-0 flex flex-col gap-3">
          <SidebarRight />
        </div>
      </div>

      <div className="shrink-0 z-10">
        <BottomBar />
      </div>
    </div>
  );
}
