'use client';

import { useContext } from 'react';
import { Context } from '../layout';
import { AccordionField } from '@/app/components/ui/accordion';

export default function Origin() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField
        title="Kommune hvor avfallet oppstod"
        value={data?.kommune?.kode + ' - ' + data?.kommune?.navn}
      />
      <AccordionField
        title="Avfallet kommer fra"
        value={data?.avfall?.erHusholdning ? 'Husholdning' : 'Næringslivet'}
      />
    </>
  );
}
