import { Deklarasjoner } from '@/app/classes/Deklarasjoner';
import Accordion from '@/app/components/ui/accordion';
import moment from 'moment';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ guid: string; version: string }>;
}

export default async function DeklarasjonVisning({ params }: PageProps) {
  const { guid, version } = await params;

  const Deklarasjon = await Deklarasjoner.getByUid(guid, version).catch(() =>
    notFound(),
  );

  const opprettet = moment(Deklarasjon?.eidAv?.overfoeringTidspunkt)
    .add(2, 'hours')
    .format('DD/MM/YY HH:mm');

  const endretAv = Deklarasjon?.currentStatus?.endretAv;
  const eidAv = Deklarasjon?.eidAv;

  return (
    <>
      <>
        <header className="flex w-full p-6 rounded-xl bg-green-500/10">
          <table>
            <thead>
              <tr>
                <td className="font-medium">Dato opprettet</td>
                <td className="font-medium">Deklarasjonsnummer</td>
                <td className="font-medium">Mottak</td>
                <td className="font-medium">Avfallsstoffnummer</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{opprettet}</td>
                <td>{guid.replace(/(.{3})/g, '$1.').replace(/\.$/, '')}</td>
                <td>{Deklarasjon?.eidAv?.anlegg?.forvaltetAv?.navn}</td>
                <td>{Deklarasjon?.avfall?.farligAvfallsstoffnummer?.kode}</td>
              </tr>
            </tbody>
          </table>
        </header>
      </>
      <>
        <Accordion
          selectionMode="multiple"
          startOpen={true}
          items={[
            {
              Produsent: (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">Navn</p>
                    <span className="flex p-4 w-full text-sm">
                      {eidAv?.organisasjon?.navn}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Kontaktperson</p>
                    <span className="flex p-4 w-full text-sm">
                      {endretAv?.navn} ({endretAv?.telefonnummer} /{' '}
                      {endretAv?.email})
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Adresse</p>
                    <span className="flex p-4 w-full text-sm">
                      {eidAv?.organisasjon?.postadresse
                        ? eidAv?.organisasjon?.postadresse?.gate +
                          ' ' +
                          eidAv?.organisasjon?.postadresse?.postnummer
                        : '-'}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Deklarasjonsnummer</p>
                    <span className="flex p-4 w-full text-sm">
                      {guid.replace(/(.{3})/g, '$1.').replace(/\.$/, '')}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Annen referanse</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.referanse || '-'}
                    </span>
                  </section>
                </article>
              ),
            },
            {
              Avfall: (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">Avfallskategori</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.avfall?.avfallType || '-'}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Avfallsstoffnummer</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.avfall?.farligAvfallsstoffnummer?.kode ||
                        '-'}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">EAL-kode</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.avfall?.eal?.kode || '-'}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">EAL-kapittel</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.avfall?.eal?.parent?.kode || '-'}
                    </span>
                  </section>
                </article>
              ),
            },
            {
              Opprinnelse: (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">
                      Kommune hvor avfallet oppstod
                    </p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.kommune?.fylke?.navn || '-'}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Avfallet kommer fra</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon?.avfall?.erHusholdning
                        ? 'Husholdning'
                        : 'Næringslivet'}
                    </span>
                  </section>
                </article>
              ),
            },
            {
              Mengde: (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">Mengde</p>
                    <span className="flex p-4 w-full text-sm">
                      {Deklarasjon.mengdeBrutto} {Deklarasjon.maaleenhet}
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Emballasjetype</p>
                    <span className="flex p-4 w-full text-sm">
                      Annet: 7, IBC: 2, Pall: 1, Fat med småkolli: 4
                    </span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Sum kolli</p>
                    <span className="flex p-4 w-full text-sm">22</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Vedlegg</p>
                    <span className="flex p-4 w-full text-sm">
                      Ingen vedlegg
                    </span>
                  </section>
                </article>
              ),
            },
            {
              Egenskaper: (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">
                      Fysiske egenskaper ved 20°
                    </p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">
                      Inneholder tungmetaller
                    </p>
                    <span className="flex p-4 w-full text-sm">Vet ikke:</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Inneholder halogener</p>
                    <span className="flex p-4 w-full text-sm">Vet ikke:</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">
                      Inneholder avfallet POPs
                    </p>
                    <span className="flex p-4 w-full text-sm">Vet ikke:</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Tåler frost</p>
                    <span className="flex p-4 w-full text-sm">Vet ikke:</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Tåler varme</p>
                    <span className="flex p-4 w-full text-sm">Vet ikke:</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Flammepunkt i C°</p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Nærmere beskrivelser</p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                </article>
              ),
            },
            {
              Transportklassifisering: (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">
                      Transportklassifisering
                    </p>
                    <span className="flex p-4 w-full text-sm">ADR</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">UN-nummer</p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">ADR-klassifisering</p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Emballasjegruppe</p>
                    <span className="flex p-4 w-full text-sm">Ingen</span>
                  </section>
                </article>
              ),
            },
            {
              'Avfallsmottak og transportør': (
                <article className="p-4">
                  <section>
                    <p className="font-medium text-sm">Avfallsmottak</p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                  <section>
                    <p className="font-medium text-sm">Transportør</p>
                    <span className="flex p-4 w-full text-sm">-</span>
                  </section>
                </article>
              ),
            },
          ]}
        />
      </>
    </>
  );
}
