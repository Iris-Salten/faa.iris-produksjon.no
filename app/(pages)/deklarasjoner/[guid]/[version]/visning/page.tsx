'use client';

import moment from 'moment';
import { Context } from './layout';
import { useContext } from 'react';

export default function Page() {
  const data = useContext(Context);

  return (
    <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full rounded-xl bg-green-500/15 p-5 gap-5 md:gap-1">
      <div className="flex flex-col">
        <p className="font-medium">Dato opprettet</p>
        <p>
          {moment(data?.eidAv?.overfoeringTidspunkt)
            .add(2, 'hours')
            .format('DD.MM.YY, HH:mm')}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-medium">Deklarasjonsnummer</p>
        <p>
          {data?.deklarasjonsnummer
            .toString()
            .split(/(?<=^(?:.{3})+)(?!$)/)
            .join('.')}
        </p>
      </div>
      {data?.eidAv?.anlegg?.forvaltetAv ? (
        <div className="flex flex-col">
          <p className="font-medium">Mottak</p>
          <p>{data?.eidAv?.anlegg?.forvaltetAv?.navn}</p>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="font-medium">Produsent</p>
          <p>{data?.eidAv?.organisasjon?.navn}</p>
        </div>
      )}
      <div className="flex flex-col">
        <p className="font-medium">Avfallsstoffnummer</p>
        <p>{data?.avfall?.farligAvfallsstoffnummer?.kode || '-'}</p>
      </div>
    </header>
  );
}
