import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import StoreManagerSlice from "../redux/storemanager/StoreManagerSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  version: 1,
  storage,
};
const reducer = combineReducers({
  //   cart: cartReducer,
  StoreManager: StoreManagerSlice,
});

const persistReduce = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistReduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
