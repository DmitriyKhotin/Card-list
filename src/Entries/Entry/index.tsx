import React, { FC, useEffect } from 'react'
import CardPage from '../../Pages/CardPage'
import MainPage from '../../Pages/MainPage'
import ErrorBoundary from '../../Components/ErrorBoundary'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'


const Entry: FC = () => {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/programs/:alias' exact component={CardPage}/>
          <Redirect to={'/'}/>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default Entry;