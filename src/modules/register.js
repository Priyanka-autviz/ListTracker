
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { uploadImageAPI } from '../config/apiMethods';

export const register = createAsyncThunk('register', async (userData) => {
    try {
        console.error('Error occurred:');
        const response = await uploadImageAPI('http://127.0.0.1:8000/account/register/', userData);
        return response.data;
    } catch (error) {
        console.error('Error occurred:', error);
        throw error;
    }
});

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        registerData: [],
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
                state.registerData = action.payload;
            })
            .addCase(register.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { reducer: registerReducer } = registerSlice;

export default registerSlice.reducer; 
