import { TopBar } from '@/components/TopBar';
import { SidebarLeft } from '@/components/SidebarLeft';
import { MainContent } from '@/components/MainContent';
import { SidebarRight } from '@/components/SidebarRight';
import { BottomBar } from '@/components/BottomBar';
import { PixelFrame } from '@/components/PixelFrame';

export default function Home() {
  return (
    <div className="h-screen w-full p-3 flex flex-col gap-3 overflow-hidden bg-parchment">
      {/* Top Bar Panel */}
      <PixelFrame className="shrink-0 z-10 bg-panel" padding={0}>
        <TopBar />
      </PixelFrame>

      {/* Main Row */}
      <div className="flex-1 flex gap-3 overflow-hidden min-h-0">
        {/* Left Sidebar */}
        <div className="w-[240px] shrink-0 flex flex-col gap-3 min-h-0">
          <SidebarLeft />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col gap-3 min-w-0 min-h-0">
          <MainContent />
        </div>

        {/* Right Sidebar */}
        <div className="w-[300px] shrink-0 flex flex-col gap-3 min-h-0">
          <SidebarRight />
        </div>
      </div>

      <div className="shrink-0 z-10">
        <BottomBar />
      </div>
    </div>
  );
}
