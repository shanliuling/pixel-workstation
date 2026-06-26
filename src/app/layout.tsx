import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANTHONY.EXE | Personal Blog Workstation",
  description: "A pixel-art personal workstation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          {children}
        </Providers>
        {/* Pxlkit Attribution */}
        <footer className="fixed bottom-0 right-0 p-1 text-[8px] text-text-secondary/50 z-50">
          UI by <a href="https://pxlkit.xyz" target="_blank" className="underline hover:text-text-primary">Pxlkit</a>
        </footer>
      </body>
    </html>
  );
}
