import React, { FC } from 'react';

import Company from '../../Molecules/Company';
import Rate from '../../Molecules/Rate';
import Periods from '../../Molecules/Periods';
import Description from '../../Molecules/Description';
import ActionPanel from '../../Molecules/ActionPanel';
import ActionButton from '../../Atoms/ActionButton';

import styles from './styles.scss';
import { CardProps } from './types';

const Card: FC<CardProps> = ({
  documents,
  age,
  alias,
  amount,
  iconUrl,
  license,
  rate,
  name,
}) =>
  window.innerWidth >= 1100 ? (
    <div className={styles.card}>
      <div className={styles.card__elem__container}>
        <div className={styles.card__elem__content}>
          <Company iconUrl={iconUrl} />
        </div>
      </div>
      <div className={styles.card__elem__container}>
        <div className={styles.card__elem__content}>
          <Rate rate={rate} name={name} />
        </div>
      </div>
      <div className={styles.card__elem__container}>
        <div className={styles.card__elem__content}>
          <Periods amount={amount} />
        </div>
      </div>
      <div className={styles.card__elem__container}>
        <div className={styles.card__elem__content}>
          <Description age={age} documents={documents} />
        </div>
      </div>
      <div className={styles.card__elem__container}>
        <div className={styles.card__elem__content}>
          <ActionPanel license={license} alias={alias} />
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Company iconUrl={iconUrl} />
        </div>
        <div className={styles.col}>
          <Rate rate={rate} name={name} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Periods amount={amount} />
        </div>
        <div className={styles.col}>
          <Description age={age} documents={documents} />
        </div>
      </div>
      <div className={styles.row}>
        <ActionButton alias={alias} />
      </div>
    </div>
  );

export default Card;
