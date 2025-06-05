export interface MeldingDto {
  id: number;
  innhold: string | null;
  erProdukt: boolean;
  sendtDato: string;
  avsenderReporteeId: string | null;
  deklarasjonStatus: string | null;
}
