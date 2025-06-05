import { AvfallType } from './avfallType';
import { PostDeklarasjonSource } from './postDeklarasjonSource';

export interface CreateDeklarasjonRequest {
  source: PostDeklarasjonSource;
  avfallType: AvfallType;
}
