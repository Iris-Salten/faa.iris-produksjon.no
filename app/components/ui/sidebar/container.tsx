'use client';

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <nav className="flex flex-col w-[85px] h-full bg-foreground p-4 shrink-0 grow-0 gap-4 items-center">
      {children}
    </nav>
  );
}
