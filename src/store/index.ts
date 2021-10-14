import { configureStore } from '@reduxjs/toolkit';

import { DEV_MODE } from '../../webpackUtils/MODE';

import creditReducer from './slice';

export const store = configureStore({
  reducer: creditReducer,
  devTools: DEV_MODE,
});
