import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    ...asyncReducers,
  });

export default createReducer;
