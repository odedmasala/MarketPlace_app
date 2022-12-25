import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "persist-key",
  version:1,
  storage,
};

const reducer = combineReducers({
//   cart: cartReducer,
});

const persistReduce = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistReduce,
});
