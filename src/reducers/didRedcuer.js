import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll8 = createAction('REVERT_ALL')

const initialState = {
  did: "",
}

export const didSlice = createSlice({
  name: "did-data",
  initialState
  ,
  extraReducers: (builder) => builder.addCase(revertAll8, () => initialState),
  reducers: {
    didStore: (state, action) => action.payload
  }
})

export default didSlice