import { BrukerDto } from './brukerDto';
import { StatusDefinition } from './statusDefinition';

export interface Status {
  id: number;
  // pathFromTop: Hierarki;
  statusDefinition: StatusDefinition;
  dato: string;
  endretAv: BrukerDto;
}
