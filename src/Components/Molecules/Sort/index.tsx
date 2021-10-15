import React, { FC } from 'react';
import cls from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getCredits } from '../../../store/api';

import styles from './styles.scss';

const sorts = [
  { value: 'minRate', text: 'мин. ставка' },
  { value: 'maxRate', text: 'макс. ставка' },
  { value: 'creditAmount.from', text: 'сумма' },
];
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

  return window.innerWidth > 480 ? (
    <div className={styles.sort}>
      <p className={styles.sort__description}>Сортировать:</p>
      {sorts.map((value, index) => {
        return (
          <p
            key={index}
            className={cls(
              styles.sort__value,
              history.location.search.includes(value.value) &&
                styles.sort__value_active
            )}
            onClick={() => sort(value.value)}
          >
            {value.text}
          </p>
        );
      })}
    </div>
  ) : (
    <select className={styles.select} onChange={(e) => sort(e.target.value)}>
      {sorts.map((value, index) => {
        return (
          <option
            value={value.value}
            key={index}
            className={styles.sort__value}
            selected={Boolean(history.location.search.includes(value.value))}
          >
            {value.text}
          </option>
        )
      })}
    </select>
  );
};

export default Sort;
