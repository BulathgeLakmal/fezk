import { createAction, createSlice } from "@reduxjs/toolkit";

export const revertAll5 = createAction('REVERT_ALL')

const initialState = {
  walletAddress: '',
}

export const WalletAddressSlice = createSlice({
  name: "wallet-address",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll5, () => initialState),
  reducers: {
    saveWalletAddress: (state, action) => action.payload
  }
})

export default WalletAddressSlice