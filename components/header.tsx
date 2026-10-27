"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="relative h-16 w-full overflow-hidden">
      <div className="relative z-10 flex h-full items-center justify-end px-6 sm:px-8">
        <ThemeToggle />
      </div>
    </header>
  );
}
