'use client';

import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { Accordion, AccordionItem } from '@heroui/react';
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

  const { data } = useQuery<DeklarasjonDto & KolliResponse>({
    queryKey: ['deklarasjon', guid, version],
    queryFn: async () => {
      return await fetch(`/api/deklarasjoner/${guid}/${version}`).then((res) =>
        res.json(),
      );
    },
  });

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
          base: 'bg-gray-50 rounded-xl shadow-none',
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
    </Context.Provider>
  );
}
