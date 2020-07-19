import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.style.scss";
import {
  cleartItemFromCart,
  addItem,
  removeItem,
} from "../../store/cart/cart.actions";

export const CheckoutItem = ({ name, imageUrl, quantity, price, ...item }) => {
  const dispacth = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => dispacth(removeItem(item))}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => dispacth(addItem(item))}>
          &#10095;
        </span>
      </span>
      <span className="price">&#8364; {price}</span>
      <span
        className="remove-button"
        onClick={() => dispacth(cleartItemFromCart(item))}
      >
        &#10006;
      </span>
    </div>
  );
};
