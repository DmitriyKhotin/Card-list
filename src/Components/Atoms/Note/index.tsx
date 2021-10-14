import React, { FC } from 'react';

import styles from './styles.scss';

const Note: FC<{ text: string }> = ({ text }) => (
  <p className={styles.note}>{text}</p>
);

export default Note;
