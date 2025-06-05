import { AvdeklKommuneDto } from './avdeklKommuneDto';
import { AvfallDto } from './avfallDto';
import { DeklarasjonEierskap } from './deklarasjonEierskap';
import { KommentarDto } from './kommentarDto';
import { Maaleenhet } from './maaleenhet';
import { Status } from './status';
import { Transport } from './transport';

export interface DeklarasjonDto {
  deklarasjonsnummer: number;
  versjon: number;
  maaleenhet: Maaleenhet;
  mengdeBrutto: number;
  status: Status[];
  kommentarer: KommentarDto[];
  erKorrigert: boolean;
  erSkjult: boolean;
  karenseTidStart: Date;
  karenseTidSlutt: Date;
  referanse: string;
  avfall: AvfallDto;
  transport: Transport;
  eidAv: DeklarasjonEierskap;
  kommune: AvdeklKommuneDto;
  duplikatAvDeklarasjonsnummer: number | null;
  klarForInnsendelse: boolean | null;
  currentStatus: Status;
  harMeldinger: boolean | null;
  harVedlegg: boolean | null;
}
