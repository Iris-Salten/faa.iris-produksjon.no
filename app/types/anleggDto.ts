import { CacheStatusDto } from './cacheStatusDto';
import { TillatelseDokumenter } from './tillatelseDokumenter';

export interface AnleggDto {
  cacheStatus: CacheStatusDto;
  anleggId: string | null;
  anleggNavn: string | null;
  anleggNummer: string | null;
  anleggsaktivitet: string | null;
  anleggsetat: string | null;
  anleggstatus: string | null;
  besoksadresse: string | null;
  besoksadressePostnummer: number | null;
  besoksadressePoststed: string | null;
  eiesAvOrganisasjonsnummer: string | null;
  fagomrade: string | null;
  harBetjentMottakAvFarligAvfall: boolean | null;
  harGyldigtillatelse: boolean;
  kommuneNummer: number;
  lokalitetNavn: string | null;
  nedlagtDato: string | null;
  organisasjonsform: string | null;
  organisasjonsnavn: string | null;
  organisasjonsnummer: string | null;
  organisasjonsstatus: string | null;
  sisteTillatelseOpphortDato: string | null;
  spillolje: boolean | null;
  utm33Nord: number | null;
  utm33Ost: number | null;
  tillatelseDokumenter: null | TillatelseDokumenter;
}
