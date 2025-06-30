'use client';

interface ComponentProps {
  children?: React.ReactNode;
}

export default function HeaderContainer({ children }: ComponentProps) {
  return (
    <nav
      style={{ zIndex: 10 }}
      className="flex w-full top-0 h-[70px] shrink-0 shadow-md"
    >
      {children}
    </nav>
  );
}
