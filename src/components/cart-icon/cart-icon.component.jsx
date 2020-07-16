import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../../store/cart/cart.actions";

import "./cart-icon.style.scss";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(({ cart }) => cart.cartItems);

  const itemCount = cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
