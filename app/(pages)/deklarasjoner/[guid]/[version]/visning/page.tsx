'use client';

import moment from 'moment';
import { Context } from './layout';
import { useContext } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const data = useContext(Context);

  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <>
      <>
        <span className="flex w-full items-center justify-between">
          <h1 className="font-semibold text-2xl">Se deklarasjon</h1>
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
      </>
      <>
        <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full rounded-xl bg-green-500/15 p-5 gap-5 md:gap-1">
          <div className="flex flex-col">
            <p className="font-medium">Dato opprettet</p>
            <p>
              {moment(data?.eidAv?.overfoeringTidspunkt)
                .add(2, 'hours')
                .format('DD.MM.YY, HH:mm')}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Deklarasjonsnummer</p>
            <p>
              {data?.deklarasjonsnummer
                .toString()
                .split(/(?<=^(?:.{3})+)(?!$)/)
                .join('.')}
            </p>
          </div>
          {data?.eidAv?.anlegg?.forvaltetAv ? (
            <div className="flex flex-col">
              <p className="font-medium">Mottak</p>
              <p>{data?.eidAv?.anlegg?.forvaltetAv?.navn}</p>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="font-medium">Produsent</p>
              <p>{data?.eidAv?.organisasjon?.navn}</p>
            </div>
          )}
          <div className="flex flex-col">
            <p className="font-medium">Avfallsstoffnummer</p>
            <p>{data?.avfall?.farligAvfallsstoffnummer?.kode || '-'}</p>
          </div>
        </header>
      </>
    </>
  );
}
