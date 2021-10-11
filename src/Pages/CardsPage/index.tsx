import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { CreditsState } from '../../store/slice'

const CardsPage: FC = () => {
  const error = useSelector( (state: CreditsState) => state.error)

  if (error) {
    throw new Error()
  }

  return <div className={'cardsPage'}/>
}

export default CardsPage