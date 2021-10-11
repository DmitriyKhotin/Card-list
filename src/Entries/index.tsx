import { render } from 'react-dom'
import Entry from './Entry'
import React from 'react'
import { debugLog } from '../utils/debugLog'
import { Provider } from 'react-redux'
import { store } from '../store'

debugLog('render App')

render(
  <Provider store={store}>
    <Entry/>
  </Provider>,
  document.getElementById('app')
);