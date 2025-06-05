import { AvfallType } from './avfallType';
import { BoolWithUndefined } from './boolWithUndefined';
import { Konsistens } from './konsistens';
import { PatchRadioaktivtAvfallRequest } from './patchRadioaktivtAvfallRequest';

export interface PatchAvfallRequest {
  inneholderTungmetaller: BoolWithUndefined;
  inneholderHalogener: BoolWithUndefined;
  inneholderPoper: BoolWithUndefined;
  taalerFrost: BoolWithUndefined;
  taalerVarme: BoolWithUndefined;
  flammepunkt: number | null;
  erHusholdning: boolean | null;
  kommentar: string | null;
  avfallType: AvfallType;
  konsistenser: null | Konsistens[];
  farligAvfallsstoffnummerKode: string | null;
  ealKode: string | null;
  radioaktivtAvfall: PatchRadioaktivtAvfallRequest;
}
