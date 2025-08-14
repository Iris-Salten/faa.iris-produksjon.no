'use client';

import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function VisningHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const { guid } = params;

  return (
    <span className="flex flex-col w-full justify-between gap-3">
      <Breadcrumbs>
        <BreadcrumbItem href="/deklarasjoner">Deklarasjoner</BreadcrumbItem>
        <BreadcrumbItem>{guid}</BreadcrumbItem>
      </Breadcrumbs>

      <span className="flex w-full items-center justify-between">
        <h1 className="font-medium text-xl">Se deklarasjon</h1>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light" size="sm">
              <svg width={25} height={25} viewBox="0 0 640 640">
                <path d="M544 320C544 346.5 522.5 368 496 368C469.5 368 448 346.5 448 320C448 293.5 469.5 272 496 272C522.5 272 544 293.5 544 320zM368 320C368 346.5 346.5 368 320 368C293.5 368 272 346.5 272 320C272 293.5 293.5 272 320 272C346.5 272 368 293.5 368 320zM144 368C117.5 368 96 346.5 96 320C96 293.5 117.5 272 144 272C170.5 272 192 293.5 192 320C192 346.5 170.5 368 144 368z" />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              key="1"
              onPress={() => {
                const params = new URLSearchParams(searchParams);
                params.set('action', 'view');
                params.set('type', 'history');

                router.push('?' + params);
              }}
            >
              Historikk
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
    </span>
  );
}
