'use client';

import { PxlKitSurfaceProvider } from "@pxlkit/ui-kit";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PxlKitSurfaceProvider surface="pixel">
      {children}
    </PxlKitSurfaceProvider>
  );
}
