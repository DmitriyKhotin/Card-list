import { render } from 'react-dom'
import Entry from './Entry'
import React from 'react'
import { debugLog } from '../utils/debugLog'

debugLog('render App')

render(<Entry/>, document.getElementById('app'));