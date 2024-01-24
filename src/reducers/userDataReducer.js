import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll4 = createAction('REVERT_ALL')

const initialState = {
  userData: null,
}

export const userDataSlice = createSlice({
  name: "User-Data",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll4, () => initialState),
  reducers: {
    saveUserData: (state, action) => action.payload
  }
})

export default userDataSlice