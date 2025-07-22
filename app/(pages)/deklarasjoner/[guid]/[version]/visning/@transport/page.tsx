'use client';

import { useContext } from 'react';
import { Context } from '../layout';
import { AccordionField } from '@/app/components/ui/accordion';

export default function Transport() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField
        title="Avfallsmottak"
        value={
          data?.eidAv?.anlegg?.forvaltetAv &&
          data?.eidAv?.anlegg?.forvaltetAv?.navn +
            ' (' +
            data?.eidAv?.anlegg?.forvaltetAv?.organisasjonsnummer +
            ')'
        }
      />
      <AccordionField
        title="Transportør"
        value={
          data?.eidAv?.organisasjon?.organisasjonsnummer ===
            data?.transport?.organisasjonsnummer && 'Avfallsprodusent'
        }
      />
    </>
  );
}
