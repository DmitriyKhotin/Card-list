import React, { FC } from 'react';

import TableRow from '../../Molecules/TableRow';
import { CreditsState } from '../../../store/slice';

import styles from './styles.scss';

const Table: FC<CreditsState['currentCredit']> = ({
  name,
  organization,
  customerRequirements,
  rate,
}) => {
  return (
    <div className={styles.table}>
      <TableRow field={'Банк'} value={organization.name} />
      <TableRow field={'Цель'} value={name} />
      <TableRow field={'Лицензия'} value={organization.license} />
      <TableRow field={'Зарплата'} value={customerRequirements.salary + '₽'} />
      <TableRow
        field={'Срок'}
        value={
          'от ' +
          rate.periods[0].term.from +
          ' до ' +
          rate.periods[0].term.to +
          ' месяцев'
        }
      />
    </div>
  );
};

export default Table;
