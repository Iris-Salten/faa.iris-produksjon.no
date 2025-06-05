import { AvdeklNuklideDto } from './avdeklNuklideDto';

export interface RadioaktivtInnholdDto {
  id: number;
  mengde: number | null;
  spesifikkAktivitet: number | null;
  nuklide: AvdeklNuklideDto;
}
