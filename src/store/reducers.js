import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const createReducer = (asyncReducers) =>
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    ...asyncReducers,
  });

const persistedReducer = persistReducer(persistConfig, createReducer());

export { persistedReducer, createReducer };
