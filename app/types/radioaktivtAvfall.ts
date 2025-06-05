import { AvfallsStoffNummerDto } from './avfallsStoffNummerDto';

export interface RadioaktivtAvfall {
  avfallId: number;
  erKlassifiseringspliktig: boolean | null;
  erDeponeringspliktig: boolean | null;
  erMaaletAvSpektrometer: boolean | null;
  isotopInnholdAktivitetsMengde: string | null;
  straalingsnivaa: number | null;
  typeMaaleinstrument: string | null;
  kilderegister: number | null;
  bruksomraade: string | null;
  radioaktivtAvfallsstoffnummer: AvfallsStoffNummerDto;
}
