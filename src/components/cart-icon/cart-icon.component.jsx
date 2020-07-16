import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../../store/cart/cart.actions";

import { selectCartItemsCunt } from "../../store/cart/cart.selectors";

import "./cart-icon.style.scss";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const itemCount = useSelector((state) => selectCartItemsCunt(state));

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
