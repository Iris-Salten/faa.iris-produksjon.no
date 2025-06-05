import { Spraak } from './spraak';

export interface BrukerDto {
  reporteeId: string | null;
  foretrukketSpraak: Spraak;
  defaultOrganisasjonsnummer: number | null;
  utsteder: string | null;
  sisteLogin: string | null;
  navn: string | null;
  email: string | null;
  telefonnummer: string | null;
}
