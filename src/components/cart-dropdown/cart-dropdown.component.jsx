import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";

import { selectCartItems } from "../../store/cart/cart.selectors";

export const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
