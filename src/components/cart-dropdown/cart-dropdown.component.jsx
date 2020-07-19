import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../store/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";

import { selectCartItems } from "../../store/cart/cart.selectors";

const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => selectCartItems(state));

  let goToCheckout = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="empty-title">No Item Selected</div>
      )}

      <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
