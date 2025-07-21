'use client';

import { Context } from './layout';

import { useContext } from 'react';

export default function Page() {
  const data = useContext(Context);

  return (
    <header className="flex w-full rounded-xl bg-green-500/15 p-5">
      <table>
        <thead>
          <tr>
            <td>Dato opprettet</td>
            <td>Deklarasjonsnummer</td>
            <td>Produsent</td>
            <td>Avfallsstoffnummer</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>{data?.deklarasjonsnummer}</td>
            <td>{data?.eidAv?.organisasjon?.navn}</td>
            <td>{data?.avfall?.farligAvfallsstoffnummer?.kode}</td>
          </tr>
        </tbody>
      </table>
    </header>
  );
}
