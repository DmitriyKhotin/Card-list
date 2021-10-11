import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCredits = createAsyncThunk(
  'credits/fetchCredits',
  async (queryParams: URLSearchParams) => {
    const response = await fetch('http://localhost:3000/' + queryParams.toString())
    const result = await response.json();
    return result;
  }
)
