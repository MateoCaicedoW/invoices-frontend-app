import {createSlice} from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    user: {} | null;
    loading: boolean;
    error: string | null;
    loggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    loggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<{}>) => {
            state.loading = false;
            state.user = action.payload;
            state.loggedIn = true;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.loggedIn = false;
        }
    }
})


export const {loginRequest, loginSuccess, loginFailure, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;