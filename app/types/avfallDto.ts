import { AvdeklEalDto } from './avdeklEalDto';
import { AvfallsStoffNummerDto } from './avfallsStoffNummerDto';
import { AvfallType } from './avfallType';
import { BoolWithUndefined } from './boolWithUndefined';
import { Konsistens } from './konsistens';
import { RadioaktivtAvfall } from './radioaktivtAvfall';

export interface AvfallDto {
  id: number;
  inneholderTungmetaller: BoolWithUndefined;
  inneholderHalogener: BoolWithUndefined;
  inneholderPoper: BoolWithUndefined;
  taalerFrost: BoolWithUndefined;
  taalerVarme: BoolWithUndefined;
  flammepunkt: number | null;
  erHusholdning: boolean | null;
  kommentar: string | null;
  avfallType: AvfallType;
  konsistenser: Konsistens[] | null;
  farligAvfallsstoffnummer: AvfallsStoffNummerDto;
  eal: AvdeklEalDto;
  radioaktivtAvfall: RadioaktivtAvfall;
}
