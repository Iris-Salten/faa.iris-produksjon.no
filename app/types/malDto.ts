import { AvdeklKommuneDto } from './avdeklKommuneDto';
import { AvfallDto } from './avfallDto';
import { KommentarDto } from './kommentarDto';
import { OrganisasjonDto } from './organisasjonDto';
import { Transport } from './transport';

export interface MalDto {
  id: number;
  navn: string | null;
  opprettet: string;
  kommentarer: null | KommentarDto[];
  referanse: string | null;
  avfall: AvfallDto;
  transport: Transport;
  eidAvOrganisasjon: OrganisasjonDto;
  kommune: AvdeklKommuneDto;
}
