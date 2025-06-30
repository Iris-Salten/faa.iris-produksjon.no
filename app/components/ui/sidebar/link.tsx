'use client';

import { Tooltip } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
}

export default function SidebarLink({ label, href, icon }: SidebarLinkProps) {
  const pathName = usePathname();

  const isActive = new URL(href, 'http://localhost:3000').pathname === pathName;

  return (
    <Tooltip content={label} placement="right">
      <Link
        draggable={false}
        href={href}
        className={`group flex w-full rounded-xl transition-all justify-center items-center p-2 px-4 ${
          isActive ? 'bg-white/15' : 'hover:bg-white/12'
        }`}
      >
        <span
          className={`w-full flex items-center transition-all ${
            isActive ? 'fill-white' : 'group-hover:fill-white fill-gray-100'
          }`}
        >
          {icon}
        </span>
      </Link>
    </Tooltip>
  );
}
