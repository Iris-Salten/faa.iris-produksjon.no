'use client';

import { Timeline, TimelinePoint } from '@/app/components/ui/timeline';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function HistoryModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { guid, version } = useParams();

  const isOpen =
    searchParams.get('action') === 'view' &&
    searchParams.get('type') === 'history';

  const handleClose = () => {
    const _params = new URLSearchParams(searchParams);
    _params.delete('action');
    _params.delete('type');

    router.push('?' + _params);
  };

  const { data, error, failureCount, isFetching, isRefetching } = useQuery<
    StatusHistorikkDto[]
  >({
    queryKey: ['history', guid],
    staleTime: 1000 * 60 * 0.5,
    enabled: isOpen,
    queryFn: async () => {
      return await fetch(
        '/api/deklarasjoner/' + guid ||
          searchParams.get('guid') + '/' + version ||
          searchParams.get('version') + '/history',
      ).then((res) => res.json());
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      size="2xl"
      onClose={handleClose}
      scrollBehavior="outside"
    >
      <ModalContent>
        <ModalHeader>Historikk</ModalHeader>
        <ModalBody>
          {error && (
            <div className="flex flex-col w-full items-center gap-15">
              <img
                className="h-[225px] flex pt-4"
                src="/svg/undraw_timeline_2gfy.svg"
              />
              <p className="text-sm text-red-500">
                En feil har oppstått ved henting av deklarasjonens historikk.
              </p>
            </div>
          )}
          {isFetching || isRefetching ? (
            <div className="flex flex-col gap-8 w-full h-[300px] shrink-0 items-center justify-center">
              <Spinner />
              {failureCount > 0 && (
                <p className="text-xs">
                  Prøver igjen... ({failureCount} mislykkede forsøk)
                </p>
              )}
            </div>
          ) : (
            <Timeline className="pb-5">
              {data
                ?.slice(0)
                ?.reverse()
                ?.map((point, i) => (
                  <TimelinePoint
                    key={i}
                    title={point.status}
                    timestamp={point.dato}
                    description={
                      point.brukerNavn +
                      ' • ' +
                      point.organisasjonnavn +
                      ' (' +
                      point.organisasjonsnummer +
                      ')'
                    }
                  />
                ))}
            </Timeline>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
