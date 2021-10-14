import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreditsState } from '../../store/slice'
import { fetchCurrentCredit } from '../../store/api'
import { useLocation, useRouteMatch, useParams } from 'react-router-dom';

const CardPage: FC = () => {
  const error = useSelector<CreditsState>( state => state.error)
  const dispatch = useDispatch();
  const params = useParams<{alias: string}>()

  useEffect(() => {
    dispatch(fetchCurrentCredit(params.alias))
  }, [])

  if (error) {
    throw new Error()
  }

  return <div className={'cardPage'}/>
}

export default CardPage