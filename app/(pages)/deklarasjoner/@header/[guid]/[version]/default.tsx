'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Default() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const Ellipsis = (
    <svg viewBox="0 0 128 512" className="h-5">
      <path
        fill="currentColor"
        d="M112 80a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM16 256c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 176c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z"
      />
    </svg>
  );

  return (
    <span className="flex w-full items-center justify-between">
      <h1 className="font-semibold text-2xl">Se deklarasjon</h1>

      <Dropdown>
        <DropdownTrigger>
          <Button size="sm" radius="full" isIconOnly variant="light">
            {Ellipsis}
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            variant="flat"
            key="1"
            startContent={
              <svg className="w-3 fill-gray-500" viewBox="0 0 448 512">
                <path d="M96 64c0-35.3 28.7-64 64-64L293.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L448 384c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64L96 64zm192 72c0 13.3 10.7 24 24 24l77.5 0-101.5-101.5 0 77.5zM48 120l0 360c0 8.8 7.2 16 16 16l264 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L64 544c-35.3 0-64-28.7-64-64L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
              </svg>
            }
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
  );
}
