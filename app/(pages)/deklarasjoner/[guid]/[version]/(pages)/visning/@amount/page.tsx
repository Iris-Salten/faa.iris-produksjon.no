'use client';

import { AccordionField } from '@/app/components/ui/accordion';
import { useContext } from 'react';
import { Context } from '../layout';

export default function Amount() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField
        title="Mengde"
        value={`${data?.mengdeBrutto} ${data?.maaleenhet}`}
      />

      {data?.kolli && (
        <AccordionField
          title="Emballasjetype"
          value={data?.kolli
            ?.map(
              (kolli) =>
                kolli.emballasje.emballasjetype + ': ' + kolli.antallKolli,
            )
            .join(', ')}
        />
      )}

      <AccordionField
        title="Sum kolli"
        value={data?.kolli?.reduce((acc, kolli) => acc + kolli.antallKolli, 0)}
      />

      <AccordionField
        title="Vedlegg"
        value={
          data?.harVedlegg
            ? 'HAR VEDLEGG MEN USIKKER PÅ HVORDAN VISE DET'
            : 'Ingen vedlegg'
        }
      />
    </>
  );
}
