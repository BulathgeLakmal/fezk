import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll10 = createAction('REVERT_ALL')

const initialState = {
  FileCompBlur: "",
}

export const FileCompBlurSlice = createSlice({
  name: "FileCompBlur",
  initialState
  ,
  extraReducers: (builder) => builder.addCase(revertAll10, () => initialState),
  reducers: {
    changeBlur: (state, action) => action.payload
  }
})

export default FileCompBlurSlice