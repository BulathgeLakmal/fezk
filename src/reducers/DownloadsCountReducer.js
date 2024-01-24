import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll9 = createAction('REVERT_ALL')

const initialState = {
  downloadCount: null,
}

export const downloadCountSlice = createSlice({
  name: "download-count",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll9, () => initialState),
  reducers: {
    downloadCount: (state, action) => action.payload
  }
})

export default downloadCountSlice