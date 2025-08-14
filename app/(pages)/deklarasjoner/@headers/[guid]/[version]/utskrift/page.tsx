'use client';

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { useParams } from 'next/navigation';

export default function UtskriftHeader() {
  const params = useParams();

  const { guid } = params;

  return (
    <span className="flex flex-col w-full justify-between gap-3">
      <Breadcrumbs>
        <BreadcrumbItem href="/deklarasjoner">Deklarasjoner</BreadcrumbItem>
        <BreadcrumbItem href="visning">{guid}</BreadcrumbItem>
        <BreadcrumbItem>Utskrift</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="font-medium text-xl">Utskrift</h1>
    </span>
  );
}
