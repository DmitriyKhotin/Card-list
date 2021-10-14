import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import ErrorBoundary from '../../Components/ErrorBoundary';
import './styles.scss';

const LoadableMainPage = Loadable({
  loader: () => import('../../Pages/MainPage'),
  loading() {
    return <div>...loading</div>;
  },
});

const LoadableCardPage = Loadable({
  loader: () => import('../../Pages/CardPage'),
  loading() {
    return <div>...loading</div>;
  },
});

const Entry: FC = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoadableMainPage} />
        <Route path="/programs/:alias" exact component={LoadableCardPage} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Entry;
