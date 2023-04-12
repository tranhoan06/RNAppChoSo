import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import addCartReducer from "../redux-setup/CartSlice";

const rootReducer = combineReducers({
  addCart: addCartReducer,
  // ... other reducers
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["addCart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
