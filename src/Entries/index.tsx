import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { debugLog } from '../utils/debugLog';
import { store } from '../store';

import Entry from './Entry';

debugLog('render App');

render(
  <Provider store={store}>
    <Entry />
  </Provider>,
  document.getElementById('app')
);
