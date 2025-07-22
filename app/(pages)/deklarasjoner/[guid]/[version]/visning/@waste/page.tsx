'use client';

import { AccordionField } from '@/app/components/ui/accordion';
import { useContext } from 'react';
import { Context } from '../layout';

export default function Waste() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField
        title="Avfallskategori"
        value={data?.avfall?.avfallType}
      />

      <AccordionField
        title="Avfallsstoffnummer"
        value={
          data?.avfall?.farligAvfallsstoffnummer &&
          data?.avfall?.farligAvfallsstoffnummer?.kode +
            ' ' +
            data?.avfall?.farligAvfallsstoffnummer?.navn
        }
      />

      <AccordionField
        title="EAL-kode"
        value={
          data?.avfall?.eal &&
          data?.avfall?.eal?.kode + ' ' + data?.avfall?.eal?.navn
        }
      />

      <AccordionField
        title="EAL-kapittel"
        value={
          data?.avfall?.eal?.parent &&
          data?.avfall?.eal?.parent?.kode +
            ' ' +
            data?.avfall?.eal?.parent?.navn
        }
      />
    </>
  );
}
