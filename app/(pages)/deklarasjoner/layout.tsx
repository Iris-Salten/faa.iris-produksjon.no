'use client';

import ScrollView from '@/app/components/scrollView';

interface LayoutProps {
  header: React.ReactNode;
  breadcrumbs: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ header, breadcrumbs, children }: LayoutProps) {
  return (
    <ScrollView width={1200} className={'p-5'}>
      {breadcrumbs}

      {header}

      {children}
    </ScrollView>
  );
}
