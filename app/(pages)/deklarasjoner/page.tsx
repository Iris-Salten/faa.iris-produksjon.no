'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import {
  Chip,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';

import moment from 'moment';

export default function Deklarasjoner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { page, size } = useParams<{ page: string; size: string }>();

  const { data, isPending, isRefetching } = useQuery<DeklarasjonerResultDto>({
    queryKey: ['deklarasjoner'],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      return await fetch(
        `/api/deklarasjoner?page=${page || 1}&size=${size || 50}`,
      ).then((res) => res.json());
    },
  });

  if (isPending || isRefetching) {
    return (
      <div className="flex w-full items-center justify-center h-[500px]">
        <Spinner />
      </div>
    );
  }

  return (
    <span className="flex flex-col w-full gap-3">
      <h1 className="font-semibold text-2xl">Alle deklarasjoner</h1>

      {data && (
        <Table
          removeWrapper
          classNames={{
            tr: 'hover:bg-gray-100 transition-all cursor-pointer',
          }}
          bottomContent={
            <Pagination
              onChange={(newPage) => {
                const params = new URLSearchParams(searchParams);
                params.set('page', newPage.toString());
                router.push('?' + params);
              }}
              showControls
              page={1}
              total={10}
            />
          }
        >
          <TableHeader>
            <TableColumn>Dek. nr.</TableColumn>
            <TableColumn>Status endret</TableColumn>
            <TableColumn>Avfallsnr. og beskrivelse</TableColumn>
            <TableColumn>Mengde</TableColumn>
            <TableColumn>Mottak</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {data.deklarasjoner.map((deklarasjon, index) => (
              <TableRow
                href={`/deklarasjoner/${deklarasjon.deklarasjonsnummer}/${deklarasjon.versjon}/visning`}
                key={index}
              >
                <TableCell>{deklarasjon.deklarasjonsnummer}</TableCell>
                <TableCell className="whitespace-nowrap">
                  {moment(deklarasjon?.eidAv?.overfoeringTidspunkt).format(
                    'DD.MM.YY HH:mm',
                  )}
                </TableCell>
                <TableCell>
                  <p className="font-semibold text-sm">
                    {deklarasjon?.avfall?.farligAvfallsstoffnummer?.kode}
                  </p>
                  <p className="text-sm">
                    {deklarasjon?.avfall?.farligAvfallsstoffnummer?.navn}
                  </p>
                </TableCell>
                <TableCell>
                  {deklarasjon.mengdeBrutto} {deklarasjon.maaleenhet}
                </TableCell>
                <TableCell className="text-blue-500">
                  {deklarasjon?.eidAv?.anlegg?.navn}
                </TableCell>
                <TableCell>
                  <Chip size="sm">
                    {deklarasjon?.currentStatus?.statusDefinition}
                  </Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </span>
  );
}
