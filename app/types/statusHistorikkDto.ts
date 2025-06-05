import { StatusDefinition } from './statusDefinition';

export interface StatusHistorikkDto {
  status: StatusDefinition;
  dato: string;
  deklarasjonsnummer: number;
  deklarasjonVersjon: number;
  organisasjonnavn: string | null;
  organisasjonsnummer: number | null;
  kommuneNavn: string | null;
  brukerNavn: string | null;
  duplikatAvDeklarasjonsnummer: number | null;
  duplikatAvVersjon: number | null;
  erKorrigert: boolean;
}
