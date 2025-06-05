import { OrganisasjonDto } from './organisasjonDto';
import { PostAdresse } from './postAdresse';

export interface AvdeklAnleggDto {
  anleggNummer: string | null;
  navn: string | null;
  kanMottaFarligAvfall: boolean | null;
  kanMottaRadioaktivtAvfall: boolean | null;
  breddegrad: number | null;
  lengdegrad: number | null;
  beskrivelse: string | null;
  utloepsdato: string | null;
  forvaltetAv: OrganisasjonDto;
  postAdresse: PostAdresse;
  erMestBrukt: boolean | null;
}
