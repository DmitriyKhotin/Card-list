import React, { FC } from 'react';

import Note from '../../Atoms/Note';
import { CardProps } from '../../Organisms/Card/types';

import styles from './styles.scss';

type DocumentsRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const DocumentsAmount: Record<DocumentsRange, string> = {
  1: '1 документ',
  2: '2 документа',
  3: '3 документа',
  4: '4 документа',
  5: '5 документов',
  6: '6 документов',
  7: '7 документов',
  8: '8 документов',
  9: '9 документов',
};

const Description: FC<Partial<CardProps>> = ({ age, documents }) => (
  <div className={styles.license}>
    <Note text={'Возраст от ' + age + (age % 10 === 1 ? ' года' : ' лет')} />
    {/* на всякий случай избегаем ошибочного поля*/}
    {DocumentsAmount[documents] && <Note text={DocumentsAmount[documents]} />}
  </div>
);

export default Description;
