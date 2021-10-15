import React, { FC, useCallback, useMemo, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getCredits } from '../../../store/api';

import styles from './styles.scss';
import { debounce } from './debounce';

const Filter: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const value = useMemo(() => {
    const creditAmount = new URLSearchParams(history.location.search).get(
      'creditAmount'
    );
    const numberCreditAmount = Number(creditAmount);
    return numberCreditAmount ? numberCreditAmount : '';
  }, []);
  const [state, setState] = useState<string | number>(value);

  const setFilter = useCallback(
    debounce((value: string) => {
      const query = new URLSearchParams(history.location.search);
      query.set('creditAmount', value);
      history.replace({
        pathname: history.location.pathname,
        search: query.toString(),
      });
      dispatch(getCredits(history.location.search));
    }),
    []
  );

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setState(e.target.value);
  };

  const clearFilter = () => {
    const query = new URLSearchParams(history.location.search);
    query.delete('creditAmount');
    history.replace({
      pathname: history.location.pathname,
      search: query.toString(),
    });
    setState('');
    dispatch(getCredits(history.location.search));
  };

  return (
    <div className={styles.filter}>
      <input
        className={styles.filter__input}
        placeholder={
          window.innerWidth <= 280 ? 'Стоимость' : 'Стоимость недвижимости'
        }
        onChange={inputChange}
        value={state}
      />
      {state && (
        <label className={styles.filter__clean} onClick={clearFilter}>
          +
        </label>
      )}
    </div>
  );
};

export default Filter;
