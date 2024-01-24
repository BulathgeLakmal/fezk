import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../reducers/Loginreducer";
import userDataSlice from "../reducers/userDataReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storageDataSlice from "../reducers/storageDetailsSlice";
import uploadSlice from "../reducers/uploadDetailsSlice";
import toggleSidebarSlice from "../reducers/toggleSidebar";
import WalletAddressSlice from "../reducers/WalletAddressSlice";
import didSlice from "../reducers/didRedcuer";
import downloadCountSlice from "../reducers/DownloadsCountReducer";
import FileCompBlurSlice from "../reducers/filesCompBlurReducer";


const persistConfig = {
  key: 'root',
  storage: storage,
}

const reducer = combineReducers({
  loginReducer: LoginSlice.reducer,
  userDataReducer: userDataSlice.reducer,
  storageDetailsReducer: storageDataSlice.reducer,
  uploadDetailsReducer: uploadSlice.reducer,
  toggleSidebarReducer: toggleSidebarSlice.reducer,
  WalletAddressReducer: WalletAddressSlice.reducer,
  DidReducer: didSlice.reducer,
  downloadCountReducer: downloadCountSlice.reducer,
  fileBlurReducer : FileCompBlurSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
})