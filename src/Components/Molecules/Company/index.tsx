import React, { FC } from 'react';

import CreditIcon from '../../Atoms/CreditIcon';
import { CardProps } from '../../Organisms/Card/types';

import styles from './styles.scss';

const Company: FC<Partial<CardProps>> = ({ iconUrl }) => {
  return (
    <div className={styles.company}>
      <CreditIcon iconUrl={iconUrl} />
    </div>
  );
};

export default Company;
