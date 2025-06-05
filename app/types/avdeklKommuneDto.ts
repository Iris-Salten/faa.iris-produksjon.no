import { AvdeklFylkeDto } from './avdeklFylkeDto';

export interface AvdeklKommuneDto {
  kode: string | null;
  navn: string | null;
  fylke: AvdeklFylkeDto;
  erMestBrukt: boolean | null;
}
