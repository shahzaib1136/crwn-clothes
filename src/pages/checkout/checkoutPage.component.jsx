import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectedCartItemsTotall,
} from "../../store/cart/cart.selectors";

import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

import "./checkoutPage.style.scss";

export const CheckoutPage = () => {
  const selectedCartItems = useSelector((state) => selectCartItems(state));

  const cartItemsTotal = useSelector((state) => selectedCartItemsTotall(state));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Desctiption</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {selectedCartItems.map((item) => (
        <CheckoutItem {...item} key={item.id} />
      ))}

      <div className="total">TOTALL :&#8364; {cartItemsTotal}</div>
    </div>
  );
};
