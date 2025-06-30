'use client';

interface SidebarSectionProps {
  children: React.ReactNode;
}

export default function SidebarSection({ children }: SidebarSectionProps) {
  return <section className="flex flex-col gap-1">{children}</section>;
}
