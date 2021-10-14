import React, { FC } from 'react';

import styles from './styles.scss';

const TableRow: FC<{ field: string; value: string }> = ({ field, value }) => (
  <div className={styles.row}>
    <div className={styles.row__key}>{field}</div>
    <div className={styles.row__value}>{value}</div>
  </div>
);

export default TableRow;
