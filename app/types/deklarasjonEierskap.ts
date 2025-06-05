import { AvdeklAnleggDto } from './avdeklAnleggDto';
import { ForrigeEierskap } from './forrigeEierskap';
import { OrganisasjonDto } from './organisasjonDto';
import { Rolle } from './rolle';
import { StatusDefinition } from './statusDefinition';

export interface DeklarasjonEierskap {
  organisasjon: OrganisasjonDto;
  anlegg: AvdeklAnleggDto;
  forrigeEierskap: ForrigeEierskap;
  status: StatusDefinition;
  overfoeringTidspunkt: string | null;
  brukerRolle: Rolle;
}
