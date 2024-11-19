import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not-authenticated', // checking, authenticated
    uuid: null,
    email: null,
    displayName: null,
    photo: null,
    errorMessage: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action)=>{
        //
    },
    logout: (state, payload)=>{
        //
    },
    checkingCredentials: (state, action)=>{
        state.status='checking'
    }
  }
});

export const {login, logout, checkingCredentials} = authSlice.actions

