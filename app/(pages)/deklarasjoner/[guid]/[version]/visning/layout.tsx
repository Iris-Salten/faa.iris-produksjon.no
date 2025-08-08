'use client';

import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { Accordion, AccordionItem, Button, Spinner } from '@heroui/react';
import { useParams } from 'next/navigation';

interface LayoutProps {
  producer: React.ReactNode;
  waste: React.ReactNode;
  origin: React.ReactNode;
  amount: React.ReactNode;
  properties: React.ReactNode;
  classifications: React.ReactNode;
  transport: React.ReactNode;
  children: React.ReactNode;
}

interface KolliResponse {
  kolli: TransportKolliDto[];
  korreksjon?: (DeklarasjonDto & KolliResponse) | null;
}

export const Context = createContext<
  (DeklarasjonDto & KolliResponse) | undefined
>(undefined);

export default function Layout({
  producer,
  waste,
  origin,
  amount,
  properties,
  classifications,
  transport,
  children,
}: LayoutProps) {
  const { guid, version } = useParams();

  const { data, isFetching, isRefetching } = useQuery<
    DeklarasjonDto & KolliResponse
  >({
    queryKey: ['deklarasjon', guid, version],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      return await fetch(`/api/deklarasjoner/${guid}/${version}`).then((res) =>
        res.json(),
      );
    },
  });

  if (isFetching || isRefetching) {
    return (
      <div className="flex w-full shrink-0 h-[400px] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Context.Provider value={data}>
      {children}

      <Accordion
        className="px-0"
        selectionMode="multiple"
        variant="splitted"
        defaultExpandedKeys={['1', '2', '3', '4', '5', '6', '7']}
        itemClasses={{
          title: 'font-medium',
          content: 'gap-4 flex flex-col border-gray-400',
          trigger: 'cursor-pointer',
          base: 'bg-white rounded-xl shadow-none',
        }}
      >
        <AccordionItem key="1" title="Produsent">
          {producer}
        </AccordionItem>
        <AccordionItem key="2" title="Avfall">
          {waste}
        </AccordionItem>
        <AccordionItem key="3" title="Opprinnelse">
          {origin}
        </AccordionItem>
        <AccordionItem key="4" title="Mengde">
          {amount}
        </AccordionItem>
        <AccordionItem key="5" title="Egenskaper">
          {properties}
        </AccordionItem>
        <AccordionItem key="6" title="Transportklassifisering">
          {classifications}
        </AccordionItem>
        <AccordionItem key="7" title="Avfallsmottak og transportør">
          {transport}
        </AccordionItem>
      </Accordion>

      <span className="flex w-full items-center justify-end pb-6">
        <Button
          color="primary"
          startContent={
            <svg width={13} height={13} viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M288 24c0 13.3 10.7 24 24 24l118.1 0-231 231c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l231-231 0 118.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24L312 0c-13.3 0-24 10.7-24 24zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 88c0 17.7-14.3 32-32 32L80 464c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L80 96z"
              />
            </svg>
          }
        >
          Gå til utskrift
        </Button>
      </span>
    </Context.Provider>
  );
}
