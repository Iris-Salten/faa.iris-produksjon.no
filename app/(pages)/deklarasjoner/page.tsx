'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import moment from 'moment';

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

export default function Deklarasjoner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page');
  const size = searchParams.get('size');
  const search = searchParams.get('search');

  const { data, isPending, isRefetching } = useQuery<DeklarasjonerResultDto>({
    queryKey: ['deklarasjoner', page, size, search],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const url = new URL('/api/deklarasjoner', window.location.origin);

      if (search && search.length > 0) {
        url.searchParams.set('search', search);
      }

      if (page) {
        url.searchParams.set('page', page);
      }

      if (size) {
        url.searchParams.set('size', size);
      }

      return await fetch(url).then((res) => res.json());
    },
  });

  if (isPending || isRefetching || !data) {
    return (
      <div className="flex w-full items-center justify-center h-[500px]">
        <Spinner />
      </div>
    );
  }

  return (
    <Table
      aria-label="Table list of all declarations"
      removeWrapper
      bottomContent={
        data?.totalPages > 0 && (
          <div className="flex items-center justify-center">
            <Pagination
              onChange={(newPage) => {
                const params = new URLSearchParams(searchParams);
                params.set('page', newPage.toString());
                router.push('?' + params);
              }}
              showControls
              page={data.currentPage}
              total={data.totalPages}
            />
          </div>
        )
      }
      classNames={{
        tr: 'hover:bg-gray-100 transition-all cursor-pointer',
      }}
    >
      <TableHeader>
        <TableColumn>Dek. nr.</TableColumn>
        <TableColumn>Status endret</TableColumn>
        <TableColumn>Avfallsnr. og beskrivelse</TableColumn>
        <TableColumn>Mengde</TableColumn>
        <TableColumn>Mottak</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={
          <p className="text-sm text-gray-500">
            {search
              ? 'Ingen deklarasjoner ble funnet for det valgte søket eller filteret.'
              : 'Ingen deklarasjoner ble funnet.'}
          </p>
        }
      >
        {data?.deklarasjoner.map((deklarasjon, index) => (
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
  );
}
