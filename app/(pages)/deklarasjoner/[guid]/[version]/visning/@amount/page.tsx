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

  console.log(
    JSON.stringify(data?.korreksjon?.kolli) !== JSON.stringify(data?.kolli),
  );
  console.log(data?.korreksjon?.kolli, data?.kolli);

  return (
    <>
      <AccordionField
        title="Mengde"
        value={
          data?.korreksjon?.mengdeBrutto &&
          data?.mengdeBrutto !== data?.korreksjon?.mengdeBrutto
            ? `${data?.korreksjon?.mengdeBrutto} ${data?.maaleenhet}`
            : `${data?.mengdeBrutto} ${data?.maaleenhet}`
        }
        corrections={
          data?.korreksjon?.mengdeBrutto &&
          data?.mengdeBrutto !== data?.korreksjon?.mengdeBrutto
            ? [
                {
                  key: 'Mengde',
                  value: data?.korreksjon?.mengdeBrutto
                    ? `${data?.mengdeBrutto} ${data?.maaleenhet}`
                    : undefined,
                },
              ]
            : []
        }
      />

      {data?.kolli && (
        <AccordionField
          title="Emballasjetype"
          value={(data?.korreksjon?.kolli === data?.kolli
            ? data?.kolli
            : data?.korreksjon?.kolli
            ? data?.korreksjon?.kolli
            : data?.kolli
          )
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
        value={(data?.korreksjon?.kolli === data?.kolli
          ? data?.kolli
          : data?.korreksjon?.kolli
          ? data?.korreksjon?.kolli
          : data?.kolli
        )?.reduce((acc, kolli) => acc + kolli.antallKolli, 0)}
        corrections={
          JSON.stringify(data?.korreksjon?.kolli) !==
          JSON.stringify(data?.kolli)
            ? [
                {
                  key: 'Emballasjetype',
                  value: data?.kolli
                    ?.map(
                      (kolli) =>
                        KolliTypes[kolli.emballasje.emballasjetype]?.name +
                        ': ' +
                        kolli.antallKolli,
                    )
                    .join(', '),
                },
                {
                  key: 'Sum kolli',
                  value: data?.kolli?.reduce(
                    (acc, kolli) => acc + kolli.antallKolli,
                    0,
                  ),
                },
              ]
            : []
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
