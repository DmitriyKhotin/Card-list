import React, { FC } from 'react';

import styles from './styles.scss';

// используется div, а не img тк AdBlock блочит src у img
const CreditIcon: FC<{ iconUrl: string }> = ({ iconUrl }) => (
  <img className={styles.logo} src={iconUrl} />
);

export default CreditIcon;
