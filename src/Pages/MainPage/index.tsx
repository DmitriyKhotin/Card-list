import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCredits } from '../../store/api'
import { useLocation } from 'react-router-dom'
import { CreditsState } from '../../store/slice'

const MainPage: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const error = useSelector( (state: CreditsState) => state.error)

  useEffect(() => {
    dispatch(fetchCredits(new URLSearchParams(location.search)))
  }, [])

  if (error) {
    throw new Error()
  }

  return <div className={'mainPage'}/>
}

export default MainPage