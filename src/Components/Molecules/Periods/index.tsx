import React, { FC } from 'react';

import { CardProps } from '../../Organisms/Card/types';

import styles from './styles.scss';

const Periods: FC<Partial<CardProps>> = ({ amount }) => (
  <div>
    <span className={styles.periods__amount}>
      {!amount.to && 'от '} {amount.from}₽
    </span>
    {amount.to && (
      <span className={styles.periods__amount}> - {amount.to}₽</span>
    )}
  </div>
);

export default Periods;
