'use client';

import { AccordionField } from '@/app/components/ui/accordion';
import { useContext } from 'react';
import { Context } from '../layout';
import { Button, Tooltip } from '@heroui/react';

export default function Producer() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField title="Navn" value={data?.eidAv?.organisasjon?.navn} />

      <AccordionField
        title="Kontaktperson"
        value={
          data?.currentStatus?.endretAv?.navn +
          ' ( ' +
          data?.currentStatus?.endretAv?.email +
          ' / ' +
          data?.currentStatus?.endretAv?.telefonnummer +
          ' )'
        }
      />

      <AccordionField
        title="Adresse"
        value={
          data?.eidAv?.organisasjon?.postadresse?.gate &&
          `${data?.eidAv?.organisasjon?.postadresse?.gate} ${data?.eidAv?.organisasjon?.postadresse?.postnummer}`
        }
      />

      <AccordionField
        title="Deklarasjonsnummer"
        value={
          <div className="flex w-full items-center justify-between">
            <p>{data?.deklarasjonsnummer}</p>
            <Tooltip content="Kopier">
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onPress={() => {
                  if (data?.deklarasjonsnummer) {
                    navigator.clipboard.writeText(
                      data?.deklarasjonsnummer.toString(),
                    );
                  }
                }}
                className="flex aspect-square cursor-pointer"
              >
                <svg viewBox="0 0 448 512" className="fill-gray-400 w-4">
                  <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                </svg>
              </Button>
            </Tooltip>
          </div>
        }
      />

      <AccordionField
        title="Referanse"
        value={data?.korreksjon?.referanse}
        corrections={
          data?.referanse !== data?.korreksjon?.referanse &&
          data?.korreksjon?.referanse !== undefined
            ? [{ key: 'Referanse', value: data?.referanse }]
            : []
        }
      />
    </>
  );
}
