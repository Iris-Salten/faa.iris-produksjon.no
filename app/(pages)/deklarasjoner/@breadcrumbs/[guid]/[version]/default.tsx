'use client';

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { useParams } from 'next/navigation';

export default function Default() {
  const { guid } = useParams();

  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/deklarasjoner">Deklarasjoner</BreadcrumbItem>
      <BreadcrumbItem>{guid}</BreadcrumbItem>
    </Breadcrumbs>
  );
}
