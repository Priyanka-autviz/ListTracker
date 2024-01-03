import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { uploadImageAPI } from '../config/apiMethods';

export const register = createAsyncThunk('register', async (userData) => {
  try {
    const response = await uploadImageAPI('http://127.0.0.1:8000/account/register/', userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log('API issue', error.response);
    } else if (error.request) {
      console.log('Request issue', error.request);
    } else {
      console.log('Other issue', error.message);
    }
    throw error; // Re-throw the error to propagate it for handling in components
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    getNearByData: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'success';
        state.getNearByData = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default registerSlice.reducer;
