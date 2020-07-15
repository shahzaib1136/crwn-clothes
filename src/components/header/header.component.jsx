import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.scss";
export const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <b> Shop</b>
        </Link>
        {currentUser ? (
          <Link className="option" onClick={() => auth.signOut()}>
            <b> Sign Out</b>
          </Link>
        ) : (
          <Link className="option" to="/signin">
            <b> Sign In</b>
          </Link>
        )}

        <Link className="option" to="/contact">
          <b> Contact</b>
        </Link>
      </div>
    </div>
  );
};
