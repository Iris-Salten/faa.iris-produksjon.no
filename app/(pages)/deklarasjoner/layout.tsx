'use client';

import ScrollView from '@/app/components/scrollView';

interface LayoutProps {
  title: React.ReactNode;
  breadcrumbs: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ title, breadcrumbs, children }: LayoutProps) {
  return (
    <ScrollView width={1200} className={'p-5'}>
      {breadcrumbs}

      {title}

      {children}
    </ScrollView>
  );
}
