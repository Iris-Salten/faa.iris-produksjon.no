import { Bruksomraade } from './bruksomraade';
import { IsotopInnholdAktivitetsMengde } from './isotopInnholdAktivitetsMengde';
import { Maaleenhet } from './maaleenhet';

export interface PatchRadioaktivtAvfallRequest {
  erKlassifiseringspliktig: boolean | null;
  erDeponeringspliktig: boolean | null;
  erMaaletAvSpektrometer: boolean | null;
  straalingsnivaa: number | null;
  isotopInnholdAktivitetsMengde: IsotopInnholdAktivitetsMengde;
  typeMaaleinstrument: null | Maaleenhet;
  kilderegister: number | null;
  bruksområde: Bruksomraade;
  radioaktivtAvfallsstoffnummerKode: string | null;
}
