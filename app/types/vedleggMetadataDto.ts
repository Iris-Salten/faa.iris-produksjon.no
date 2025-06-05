import { VedleggType } from './vedleggType';

export interface VedleggMetadataDto {
  guid: string | null;
  vedleggType: VedleggType;
  opprinneligFilnavn: string | null;
  stoerrelse: number | null;
  deklarasjonsnummer: number | null;
  deklarasjonVersjon: number | null;
}
