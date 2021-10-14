import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './styles.scss'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCredits } from '../../../store/api'
import { debounce } from './debounce'

const Filter: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const defaultValue = useMemo(() => {
    const creditAmount = new URLSearchParams(history.location.search).get('creditAmount');
    return Number(creditAmount) ? creditAmount : 0;
  }, [new URLSearchParams(history.location.search).get('creditAmount')])

  const setFilter = useCallback(debounce(
    (value: string) => {
      const query = new URLSearchParams(history.location.search)
      query.set('creditAmount', value)
      history.replace({pathname : history.location.pathname, search : query.toString()});
      dispatch(getCredits(history.location.search))
    }
  ), [])

  return (
    <div className={styles.filter}>
      <p>Стоимость недвижимости</p>
      <input onChange={(e) => setFilter(e.target.value)} defaultValue={defaultValue}/>
    </div>
  )
}

export default Filter