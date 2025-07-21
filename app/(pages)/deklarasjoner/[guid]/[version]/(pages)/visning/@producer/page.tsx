'use client';

import { AccordionField } from '@/app/components/ui/accordion';
import { useContext } from 'react';
import { Context } from '../layout';

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
        value={data?.deklarasjonsnummer}
      />

      <AccordionField title="Referanse" value={data?.referanse} />
    </>
  );
}
