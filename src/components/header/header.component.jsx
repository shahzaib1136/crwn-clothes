import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";

import { useSelector } from "react-redux";

import "./header.style.scss";
export const Header = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);

  const toggleCartHidden = useSelector(({ cart }) => cart.hidden);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <b> Shop</b>
        </Link>

        <Link className="option" to="/contact">
          <b> Contact</b>
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <b> Sign Out</b>
          </div>
        ) : (
          <Link className="option" to="/signin">
            <b> Sign In</b>
          </Link>
        )}

        <CartIcon />
      </div>

      {!toggleCartHidden && <CartDropdown />}
    </div>
  );
};
