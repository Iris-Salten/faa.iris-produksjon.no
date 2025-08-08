'use client';

import ScrollView from '@/app/components/scrollView';

interface LayoutProps {
  breadcrumbs: React.ReactNode;
  history: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({
  breadcrumbs,
  history,
  children,
}: LayoutProps) {
  return (
    <ScrollView width={1400} className={'p-5'}>
      {history}

      {breadcrumbs}

      {children}
    </ScrollView>
  );
}
