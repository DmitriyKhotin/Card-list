import { createAsyncThunk } from '@reduxjs/toolkit';

import { DEV_MODE } from '../../webpackUtils/MODE';
import { debugLog } from '../utils/debugLog';

import { Range } from './slice';

const rootPath = DEV_MODE ? 'http://localhost:3000/' : '/';

debugLog('Root path for server:', rootPath);

export const getCredits = createAsyncThunk(
  'credits/getCredits',
  async (queryParams: string) => {
    const response = await fetch(rootPath + queryParams);
    const result = await response.json();
    return result;
  }
);

export const fetchNewCredits = createAsyncThunk(
  'credits/fetchNewCredits',
  async (range: Range<number>) => {
    const response = await fetch(rootPath, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(range),
    });
    const result = await response.json();
    return result;
  }
);

export const fetchCurrentCredit = createAsyncThunk(
  'credits/fetchCurrentCredit',
  async (alias: string) => {
    const response = await fetch(rootPath + 'programs/' + alias);
    const result = await response.json();
    return result;
  }
);
