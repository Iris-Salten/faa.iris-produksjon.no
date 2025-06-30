'use client';

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { useParams } from 'next/navigation';

interface LayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ header, children }: LayoutProps) {
  const { guid } = useParams();

  return (
    <main className="flex w-full h-full items-center justify-center overflow-y-auto py-5">
      <article className="flex flex-col max-w-[1200px] w-full h-full gap-3">
        <Breadcrumbs>
          <BreadcrumbItem>Deklarasjoner</BreadcrumbItem>
          <BreadcrumbItem>{guid}</BreadcrumbItem>
        </Breadcrumbs>

        {header}

        {children}
      </article>
    </main>
  );
}
