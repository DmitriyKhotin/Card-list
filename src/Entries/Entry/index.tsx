import React, { FC } from 'react'
import CardsPage from '../../Pages/CardsPage'
import MainPage from '../../Pages/MainPage'
import ErrorBoundary from '../../ErrorBoundary'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const Entry: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/programs/:alias' exact component={CardsPage}/>
          <Redirect to={'/'}/>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default Entry;