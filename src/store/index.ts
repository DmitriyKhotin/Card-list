import { configureStore } from '@reduxjs/toolkit'
import creditReducer from './slice'
import { DEV_MODE } from '../../webpackUtils/MODE'

export const store = configureStore({
  reducer: creditReducer,
  devTools: DEV_MODE
})