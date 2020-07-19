import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.style.scss";
import { removeItem } from "../../store/cart/cart.actions";

export const CheckoutItem = ({ name, imageUrl, quantity, price, ...item }) => {
  const dispacth = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">&#8364; {price * quantity}</span>
      <span
        className="remove-button"
        onClick={() => dispacth(removeItem(item))}
      >
        &#10006;
      </span>
    </div>
  );
};
