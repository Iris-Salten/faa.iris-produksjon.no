'use client';

import { BreadcrumbItem as BreadcrumbItemHeroUI } from '@heroui/react';

interface BreadcrumbItemProps {
  children: React.ReactNode;
}

export default function BreadcrumbItem({ children }: BreadcrumbItemProps) {
  return <BreadcrumbItemHeroUI>{children}</BreadcrumbItemHeroUI>;
}
