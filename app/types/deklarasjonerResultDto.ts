import { DeklarasjonDto } from './deklarasjonDto';

export interface DeklarasjonerResultDto {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  deklarasjoner: DeklarasjonDto[];
}
