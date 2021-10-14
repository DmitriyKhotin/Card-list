import { DocumentsRange, Range } from '../../../store/slice';

export type CardProps = {
  name: string;
  iconUrl: string;
  rate: number;
  amount: Range<number>;
  age: number;
  documents: DocumentsRange;
  license: string;
  alias: string;
};
