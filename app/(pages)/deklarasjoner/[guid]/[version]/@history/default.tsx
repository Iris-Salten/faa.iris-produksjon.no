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
  const { guid, version } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isOpen =
    searchParams.get('action') === 'view' &&
    searchParams.get('type') === 'history';

  const handleClose = () => {
    const _params = new URLSearchParams(searchParams);
    _params.delete('action');
    _params.delete('type');

    router.push('?' + _params);
  };

  const { data, isFetching, isRefetching } = useQuery<StatusHistorikkDto[]>({
    queryKey: ['history', guid],
    staleTime: 1000 * 60 * 0.5,
    enabled: isOpen,
    queryFn: async () => {
      return await fetch(
        '/api/deklarasjoner/' + guid + '/' + version + '/history',
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
          {isFetching || isRefetching ? (
            <div className="flex w-full h-[300px] shrink-0 items-center justify-center">
              <Spinner />
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
