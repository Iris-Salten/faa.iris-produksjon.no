'use client';

import { Breadcrumbs as BreadcrumbContainer } from '@heroui/react';

interface BreadcrumbsProps {
  children: React.ReactNode;
}

export default function Breadcrumbs({ children }: BreadcrumbsProps) {
  return <BreadcrumbContainer>{children}</BreadcrumbContainer>;
}
