import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll2 = createAction('REVERT_ALL')


const initialState = {
  StorageData: null,
}
export const storageDataSlice = createSlice({
  name: "storage-data",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll2, () => initialState),
  reducers: {
    saveStorageData: (state, action) => action.payload
  }
})

export default storageDataSlice