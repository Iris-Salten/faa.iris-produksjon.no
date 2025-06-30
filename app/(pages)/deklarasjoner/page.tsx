import { Deklarasjoner } from '@/app/classes/Deklarasjoner';

export default async function DeclarationsPage() {
  const response = await Deklarasjoner.getAll();

  return (
    <>
      {response.deklarasjoner.map((deklarasjon, index) => (
        <p key={index}>{deklarasjon.deklarasjonsnummer}</p>
      ))}
    </>
  );
}
