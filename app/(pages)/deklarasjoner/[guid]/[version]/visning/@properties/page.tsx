'use client';

import { AccordionField } from '@/app/components/ui/accordion';
import { useContext } from 'react';
import { Context } from '../layout';

export default function Properties() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField
        title="Fysiske egenskaper ved 20°"
        value={
          data?.korreksjon?.avfall?.konsistenser?.toString() ===
          data?.avfall?.konsistenser?.toString()
            ? data?.avfall?.konsistenser?.join(', ')
            : data?.korreksjon?.avfall?.konsistenser?.join(', ')
        }
        corrections={
          data?.korreksjon?.avfall?.konsistenser?.toString() !==
          data?.avfall?.konsistenser?.toString()
            ? [
                {
                  key: 'Fysiske egenskaper ved 20°',
                  value: data?.avfall?.konsistenser?.join(', '),
                },
              ]
            : []
        }
      />
      <AccordionField
        title="Inneholder tungmetaller"
        value={
          data?.avfall?.inneholderTungmetaller === 'Undefined'
            ? 'Vet ikke: ' +
              data?.kommentarer?.find(
                (k) => k.feltNavn === 'InneholderTungmetaller',
              )?.tekst
            : data?.avfall?.inneholderTungmetaller === 'True'
            ? 'Ja'
            : 'Nei'
        }
      />
      <AccordionField
        title="Inneholder halogener"
        value={
          data?.avfall?.inneholderHalogener === 'Undefined'
            ? 'Vet ikke: ' +
              data?.kommentarer?.find(
                (k) => k.feltNavn === 'InneholderHalogener',
              )?.tekst
            : data?.avfall?.inneholderHalogener === 'True'
            ? 'Ja'
            : 'Nei'
        }
      />
      <AccordionField
        title="Inneholder avfallet POPs"
        value={
          data?.avfall?.inneholderPoper === 'Undefined'
            ? 'Vet ikke: ' +
              data?.kommentarer?.find((k) => k.feltNavn === 'InneholderPoper')
                ?.tekst
            : data?.avfall?.inneholderPoper === 'True'
            ? 'Ja'
            : 'Nei'
        }
      />
      <AccordionField
        title="Tåler frost"
        value={data?.avfall?.taalerFrost ? 'Ja' : 'Nei'}
      />
      <AccordionField
        title="Tåler varme"
        value={data?.avfall?.taalerVarme ? 'Ja' : 'Nei'}
      />
      <AccordionField
        title="Flammepunkt i C°"
        value={
          data?.avfall?.flammepunkt && data?.avfall?.flammepunkt + ' ' + '°C'
        }
      />
      <AccordionField
        title="Nærmere beskrivelser"
        value={
          data?.korreksjon?.avfall?.kommentar !== data?.avfall?.kommentar
            ? data?.korreksjon?.avfall?.kommentar
            : data?.avfall?.kommentar
        }
        corrections={
          data?.korreksjon?.avfall?.kommentar !== data?.avfall?.kommentar
            ? [
                {
                  key: 'Fysiske egenskaper ved 20°',
                  value: data?.avfall?.kommentar ?? undefined,
                },
              ]
            : []
        }
      />
    </>
  );
}
