import React from "react";
import { useDispatch } from "react-redux";

import { CustomButton } from "../custom-button/custom-button.component";

import { addItem } from "../../store/cart/cart.actions";

import "./collection-item.style.scss";

export const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  let { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};
