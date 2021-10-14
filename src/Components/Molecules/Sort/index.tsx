import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getCredits } from '../../../store/api';

import styles from './styles.scss';

const Sort: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sort = (sortBy: string) => {
    const query = new URLSearchParams(history.location.search);
    query.set('sort', sortBy);
    history.replace({
      pathname: history.location.pathname,
      search: query.toString(),
    });
    dispatch(getCredits(history.location.search));
  };

  return (
    <div className={styles.sort}>
      <p className={styles.sort__description}>Сортировать:</p>
      <p className={styles.sort__value} onClick={() => sort('minRate')}>
        мин. ставка
      </p>
      <p className={styles.sort__value} onClick={() => sort('maxRate')}>
        макс. ставка
      </p>
      <p
        className={styles.sort__value}
        onClick={() => sort('creditAmount.from')}
      >
        сумма
      </p>
    </div>
  );
};

export default Sort;
