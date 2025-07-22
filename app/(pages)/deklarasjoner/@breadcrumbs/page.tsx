'use client';

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';

export default function DeklarasjonerBreadcrumbs() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
      <BreadcrumbItem>Deklarasjoner</BreadcrumbItem>
    </Breadcrumbs>
  );
}
