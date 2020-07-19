import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { CartIcon } from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selecter";
import { selectToggleItemCartHidden } from "../../store/cart/cart.selectors";

import { useClickOutside } from "../../hooks/useClickOutside";

import { hideCartOnOutsideClick } from "../../store/cart/cart.actions";

import "./header.style.scss";
export const Header = () => {
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const currentUser = useSelector((state) => selectCurrentUser(state));

  const carthidden = useSelector((state) => selectToggleItemCartHidden(state));

  useClickOutside(dropdownRef, () => dispatch(hideCartOnOutsideClick()));

  return (
    <div className="header" ref={dropdownRef}>
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

      {!carthidden && <CartDropdown />}
    </div>
  );
};
