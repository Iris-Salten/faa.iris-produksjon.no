import { DeklarasjonDto as DeklarasjonDtoType } from './app/types/deklarasjonDto';
import { DeklarasjonerResultDto as DeklarasjonerResultDtoType } from './app/types/deklarasjonerResultDto';
import { StatusHistorikkDto as StatusHistorikkDtoType } from './app/types/statusHistorikkDto';
import { TransportKolliDto as TransportKolliDtoType } from './app/types/transportKolliDto';

export {};

declare global {
  type DeklarasjonerResultDto = DeklarasjonerResultDtoType;
  type DeklarasjonDto = DeklarasjonDtoType;
  type TransportKolliDto = TransportKolliDtoType;
  type StatusHistorikkDto = StatusHistorikkDtoType;
}
