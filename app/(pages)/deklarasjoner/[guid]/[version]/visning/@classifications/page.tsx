'use client';

import { useContext } from 'react';
import { Context } from '../layout';
import { AccordionField } from '@/app/components/ui/accordion';
import Image from 'next/image';

const Types: { [key: string]: string } = {
  Vei: 'ADR',
  Jernbane: 'RID',
  Maritim: 'IMDG',
  Luftfart: 'ICAO-TI / IATA-DGR',
};

const Classes: { [key: string]: { classNr: string; name: string } } = {
  BrannfarligeVaesker: {
    name: 'Brannfarlige væsker',
    classNr: '3',
  },
  RadioaktivtMateriale: {
    name: 'Radioaktive stoffer',
    classNr: '7',
  },
  EtsendeStoffer: {
    name: 'Etsende stoffer',
    classNr: '8',
  },
  ForskjelligeFarligeStofferOgGjenstander: {
    name: 'Farlige stoffer og gjenstander',
    classNr: '9',
  },
  MiljoefarligeStoffer: {
    name: 'Miljøskadelig',
    classNr: 'M',
  },
  BrannfarligeGasser: {
    name: 'Brannfarlige gasser',
    classNr: '2.1',
  },
  IkkeBrannfarligeGasserIkkeGiftigeGasser: {
    name: 'Ikke brannfarlige gasser, ikke giftige gasser',
    classNr: '2.2',
  },
  GiftigeGasser: {
    name: 'Giftige gasser',
    classNr: '2.3',
  },
  BrannfarligeFasteStofferOgAndre: {
    name: 'Brannfarlige faste stoffer og faste eksplosivstoffer som er gjort ufølsomme',
    classNr: '4.1',
  },
  SelvantennendeStoffer: {
    name: 'Selvantennelige stoffer',
    classNr: '4.2',
  },
  StofferSomUtviklerBrennbareGasserIKontaktMedVann: {
    name: 'Stoffer som utvikler brannfarlige gasser ved kontakt med vann',
    classNr: '4.3',
  },
  OksiderendeStoffer: {
    name: 'Oksiderende stoffer',
    classNr: '5.1',
  },
  OrganiskePeroksider: {
    name: 'Organiske peroksider',
    classNr: '5.2',
  },
  GiftigeStoffer: {
    name: 'Giftige stoffer',
    classNr: '6.1',
  },
  ForskjelligeFarligeStofferOgGjenstanderBatterier: {
    name: 'Litiumbatterier',
    classNr: '9.a',
  },
};

export default function Classifications() {
  const data = useContext(Context);

  return (
    <>
      <AccordionField
        title="Transportklassifisering"
        value={data?.transport?.typer?.map((type) => Types[type]).join(', ')}
      />
      <AccordionField
        title="UN-nummer"
        value={data?.transport?.unNummer || undefined}
      />
      <AccordionField
        title="ADR-klassifisering"
        value={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data?.transport?.adrKlasser?.map((klassifisering) => {
              const Class = Classes[klassifisering];

              return (
                <div
                  key={klassifisering}
                  className="flex items-center justify-between"
                >
                  <span>{'Klasse ' + Class.classNr + ' - ' + Class.name}</span>
                  <Image
                    alt={klassifisering}
                    loading="eager"
                    src={
                      `https://avfallsdeklarering-staging.miljodirektoratet.no/images/pictograms/` +
                      klassifisering +
                      '.svg'
                    }
                    className="flex h-[75px] w-[75px] shrink-0 grow-0 aspect-square"
                    draggable={false}
                    width={150}
                    height={150}
                  />
                </div>
              );
            })}
          </div>
        }
      />
      <AccordionField
        title="Emballasjegruppe"
        value={
          data?.transport?.pakkegruppe === 'None'
            ? 'Ingen'
            : data?.transport?.pakkegruppe
        }
      />
    </>
  );
}
