import React, { FC } from 'react'
import CardsPage from '../../Pages/CardsPage'
import MainPage from '../../Pages/MainPage'
import ErrorBoundary from '../../ErrorBoundary'

const Entry: FC = () => {
  return (
    <ErrorBoundary>
      <MainPage/>
      <CardsPage/>
    </ErrorBoundary>
  )
}

export default Entry;