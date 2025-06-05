import { AvdeklAnleggDto } from './avdeklAnleggDto';
import { OrganisasjonDto } from './organisasjonDto';
import { Rolle } from './rolle';

import { StatusDefinition } from './statusDefinition';

export interface ForrigeEierskap {
  organisasjon: OrganisasjonDto;
  anlegg: AvdeklAnleggDto;
  status: StatusDefinition;
  overfoeringTidspunkt: string | null;
  forrigeEierskap: ForrigeEierskap;
  brukerRolle: Rolle;
}
