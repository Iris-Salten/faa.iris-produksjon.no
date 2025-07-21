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
        value={data?.avfall?.konsistenser?.join(', ')}
      />
      <AccordionField
        title="Inneholder tungmetaller"
        value={
          data?.avfall?.inneholderTungmetaller === 'Undefined'
            ? 'Vet ikke: '
            : data?.avfall?.inneholderTungmetaller === 'True'
            ? 'Ja'
            : 'Nei'
        }
      />
    </>
  );
}
