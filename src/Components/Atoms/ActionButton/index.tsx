import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const ActionButton: FC<{ alias: string }> = ({ alias }) => (
  <Link to={'/programs/' + alias} className={styles.actionButton}>
    <button className={styles.actionButton__button}>ПОКАЗАТЬ УСЛОВИЯ</button>
  </Link>
);

export default ActionButton;
