import { DocumentsRange, Range } from '../../../store/slice'

const DocumentsAmount: Record<DocumentsRange, string> = {
  1: '1 документ',
  2: '1 документа',
  3: '1 документа',
  4: '1 документа',
  5: '1 документов',
  6: '1 документов',
  7: '1 документов',
  8: '1 документов',
  9: '1 документов',
}

export type CardProps = {
  name: string,
  iconUrl: string,
  rate: number,
  amount: Range<number>,
  age: number,
  documents: DocumentsRange,
  license: string,
  alias: string
}