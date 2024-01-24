import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll3 = createAction('REVERT_ALL')


const initialState = {
  uploadData: null,
}

export const uploadSlice = createSlice({
  name: "User-Data",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll3, () => initialState),
  reducers: {
    uploadData: (state, action) => action.payload
  }
})

export default uploadSlice