import React, { FC } from 'react';

import Note from '../../Atoms/Note';
import { CardProps } from '../../Organisms/Card/types';

import styles from './styles.scss';

const Rate: FC<Partial<CardProps>> = ({ rate, name }) => (
  <div className={styles.rate}>
    <p className={styles.rate_percent}>{rate}%</p>
    <Note text={'«' + name + '»'} />
  </div>
);

export default Rate;
