'use client';

import ScrollView from '@/app/components/scrollView';

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { useParams } from 'next/navigation';

interface LayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { guid } = useParams();

  return (
    <ScrollView width={1200} className={'p-5'}>
      <Breadcrumbs>
        <BreadcrumbItem>Deklarasjoner</BreadcrumbItem>
        <BreadcrumbItem>{guid}</BreadcrumbItem>
      </Breadcrumbs>

      <span className="flex w-full items-center justify-between">
        <h1 className="font-semibold text-2xl">Se deklarasjon</h1>
      </span>

      {children}
    </ScrollView>
  );
}
