'use client';

import { AccordionField } from '@/app/components/ui/accordion';
import { useContext } from 'react';
import { Context } from '../layout';

const KolliTypes: { [key: string]: { name: string } } = {
  SmaaPakker: { name: 'Småpakker' },
  Toenne: { name: 'Tønne' },
  ToenneMedSmaaPakker: { name: 'Tønne med småpakker' },
  Tank: { name: 'Tank' },
  IBC: { name: 'IBC' },
  IBCMedSmaaPakker: { name: 'IBC med småpakker' },
  Container: { name: 'Container' },
  BeholderMedSmaaPakker: { name: 'Beholder med småpakker' },
  BigBag: { name: 'Big bag' },
  BigBagMedSmaaPakker: { name: 'Big bag med småpakker' },
  Pall: { name: 'Pall' },
  PallMedSmaaPakker: { name: 'Pall med småpakker' },
  Bensintank: { name: 'Bensintank' },
  BulkBil: { name: 'Bulkbil' },
  BulkBaatEllerSkip: { name: 'Bulkbåt eller skip' },
  AndreTyperEmballasje: { name: 'Andre typer emballasje' },
};

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
                KolliTypes[kolli.emballasje.emballasjetype]?.name +
                ': ' +
                kolli.antallKolli,
            )
            .join(', ')}
        />
      )}

      <AccordionField
        title="Sum kolli"
        value={data?.kolli?.reduce((acc, kolli) => acc + kolli.antallKolli, 0)}
        endContent={
          <div className="flex flex-col gap-4 w-full p-4 border-[1px] border-orange-500/40 bg-orange-500/10">
            <p className="italic text-xs">Korrigert av mottak</p>
            <span className="flex flex-col">
              <p className="font-medium text-sm">Sum kolli</p>
              <span className="p-4 border-b-[1px] border-gray-300 text-sm">
                test123
              </span>
            </span>
          </div>
        }
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
