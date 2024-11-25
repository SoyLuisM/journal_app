import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'checking', // checking, authenticated
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
    login: (state, {payload})=>{
      state.status= 'authenticated', // checking, authenticated
      state.uuid= payload.uid,
      state.email= payload.email,
      state.displayName= payload.displayName,
      state.photo= payload.photoURL,
      state.errorMessage= null
    },
    logout: (state, {payload} )=>{
      
      state.status= 'not-authenticated', // checking, authenticated
      state.uuid= null,
      state.email= null,
      state.displayName= null,
      state.photo= null,
      state.errorMessage = payload?.errorMessage
    },
    checkingCredentials: (state, action)=>{
        state.status='checking',
        state.uuid= null,
        state.email= null,
        state.displayName= null,
        state.photo= null,
        state.errorMessage = null
    }
  }
});

export const {login, logout, checkingCredentials} = authSlice.actions

