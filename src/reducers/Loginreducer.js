import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll = createAction('REVERT_ALL')

const initialState = {
  loginData: null,
}

export const LoginSlice = createSlice({
  name: "Login-Data",
  initialState
  ,
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
  reducers: {
    saveUser: (state, action) => action.payload
  }
})

export default LoginSlice