import { AdrKlasser } from './adrKlasser';
import { PakkeGruppe } from './pakkeGruppe';
import { TransportType } from './transportType';

export interface Transport {
  id: number;
  unNummer: number | null;
  navn: string | null;
  kommentar: string | null;
  erKlassifiseringspliktig: boolean | null;
  organisasjonsnummer: number | null;
  adrKlasser: null | AdrKlasser[];
  typer: null | TransportType[];
  pakkegruppe: PakkeGruppe;
}
