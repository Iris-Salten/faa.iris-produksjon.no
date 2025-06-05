export interface AvdeklEalDto {
  kode: string | null;
  navn: string | null;
  nivaa: number;
  utloepsdato: string | null;
  erFarlig: boolean;
  parent: AvdeklEalDto;
}
