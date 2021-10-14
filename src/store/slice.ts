import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { debugLog } from '../utils/debugLog';

import { fetchCurrentCredit, fetchNewCredits, getCredits } from './api';

export type DocumentsRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface Range<T> {
  from: T;
  to?: T;
}

export interface Organization {
  name: string;
  license: string;
  logo: string;
}

export interface CustomerRequirements {
  documents: DocumentsRange;
  age: number;
  manAgeAtRepayment: number;
  femaleAgeAtRepayment: number;
  lastExperience: number;
  fullExperience: number;
  salary: number;
}

export interface Rate {
  periods: {
    rate: Range<number>;
    termUnit: string;
    term: Range<number>;
    isFloatingRate: boolean;
  }[];
  currency: 'RUB' | 'USD' | 'EUR';
  creditAmount: Range<number>;
  initialAmount: Range<number>;
}

export interface Credit {
  name: string;
  alias: string;
  organization: Organization;
  customerRequirements: CustomerRequirements;
  rate: Rate;
}

type CreditWithCount = {
  credits: Credit[];
} & {
  count: 0;
};

export interface CreditsState {
  credits: Credit[];
  currentCredit: Credit;
  error: boolean;
  loading: boolean;
  count: number;
}

const initialState: CreditsState = {
  credits: [],
  error: false,
  loading: false,
  currentCredit: undefined,
  count: 0,
};

const counterSlice = createSlice({
  name: 'credits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCredits.rejected, (state: CreditsState) => {
        debugLog('getCredits rejected');
        state.error = true;
        state.loading = false;
        state.credits = [];
        state.currentCredit = undefined;
        state.count = 0;
      })
      .addCase(getCredits.pending, (state: CreditsState) => {
        debugLog('getCredits pending');
        state.error = false;
        state.loading = true;
        state.credits = [];
        state.currentCredit = undefined;
        state.count = 0;
      })
      .addCase(
        getCredits.fulfilled,
        (state: CreditsState, action: PayloadAction<CreditWithCount>) => {
          debugLog('getCredits fulfilled');
          state.credits.push(...action.payload.credits);
          state.loading = false;
          state.error = false;
          state.count = action.payload.count;
        }
      )
      .addCase(fetchNewCredits.rejected, (state: CreditsState) => {
        debugLog('fetchNewCredits rejected');
        state.error = true;
        state.loading = false;
        state.credits = [];
        state.currentCredit = undefined;
        state.count = 0;
      })
      .addCase(fetchNewCredits.pending, (state: CreditsState) => {
        debugLog('fetchNewCredits pending');
        state.error = false;
        state.loading = true;
      })
      .addCase(
        fetchNewCredits.fulfilled,
        (state: CreditsState, action: PayloadAction<Credit[]>) => {
          debugLog('fetchNewCredits fulfilled');
          state.credits.push(...action.payload);
          state.loading = false;
          state.error = false;
        }
      )
      .addCase(fetchCurrentCredit.rejected, (state: CreditsState) => {
        debugLog('fetchCurrentCredit rejected');
        state.error = true;
        state.loading = false;
        state.credits = [];
        state.currentCredit = undefined;
      })
      .addCase(fetchCurrentCredit.pending, (state: CreditsState) => {
        debugLog('fetchCurrentCredit pending');
        state.error = false;
        state.loading = true;
        state.currentCredit = undefined;
      })
      .addCase(
        fetchCurrentCredit.fulfilled,
        (state: CreditsState, action: PayloadAction<Credit>) => {
          debugLog('fetchCurrentCredit fulfilled');
          state.currentCredit = action.payload;
          state.loading = false;
          state.error = false;
        }
      );
  },
});

export default counterSlice.reducer;
