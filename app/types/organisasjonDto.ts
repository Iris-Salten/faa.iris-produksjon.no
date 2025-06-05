import { PostAdresse } from './postAdresse';

export interface OrganisasjonDto {
  organisasjonsnummer: number;
  navn: string | null;
  overordnetOrganisasjonsnummer: number | null;
  postadresse: PostAdresse;
  erMottak: boolean | null;
}
