import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCredits } from './api'
import { debugLog } from '../utils/debugLog'

interface Range<T> {
  from: T,
  to?: T,
}

interface Organization {
  name: string,
  license: string,
  logo: string,
}

interface CustomerRequirements {
  documents: number,
  age: number,
  manAgeAtRepayment: number,
  femaleAgeAtRepayment: number,
  lastExperience: number,
  fullExperience: number,
  salary: number
}

interface Rate {
  periods: {
    rate: Range<number>,
    termUnit: string,
    term: Range<number>,
    isFloatingRate: boolean,
  }
  currency: 'RUB' | 'USD' | 'EUR',
  creditAmount: Range<number>,
  initialAmount: Range<number>,
}

export interface Credits {
  name: string,
  alias: string,
  organization: Organization,
  customerRequirements: CustomerRequirements,
  rate: Rate,
}

export interface CreditsState {
  credits: Credits[],
  error: boolean
}

const initialState: CreditsState = {
  credits: [],
  error: false
};

const counterSlice = createSlice({
  name: 'credits',
  initialState,
  reducers: {
    increment() {
      console.log('increment')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCredits.rejected, (state, action) => {
        state.error = true;
        state.credits = [];
      })
      .addCase(fetchCredits.fulfilled, (state, action) => {
        debugLog('fetchCredits fulfilled', action.payload)
        debugLog('fetchCredits fulfilled')
        state.credits.push(...action.payload)
        state.error = false;
      })
  }
})
console.log(counterSlice)
export const { increment }  = counterSlice.actions
export default counterSlice.reducer