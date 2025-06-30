import { DeklarasjonDto as DeklarasjonDtoType } from './app/types/deklarasjonDto';
import { DeklarasjonerResultDto as DeklarasjonerResultDtoType } from './app/types/deklarasjonerResultDto';

export {};

declare global {
  type DeklarasjonerResultDto = DeklarasjonerResultDtoType;
  type DeklarasjonDto = DeklarasjonDtoType;
}
