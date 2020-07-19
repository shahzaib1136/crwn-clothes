import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopCollectionsReducer from "./shopCollections/collections.reducer";

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
    directory: directoryReducer,
    shopCollections: shopCollectionsReducer,
    ...asyncReducers,
  });

const persistedReducer = persistReducer(persistConfig, createReducer());

export { persistedReducer, createReducer };
