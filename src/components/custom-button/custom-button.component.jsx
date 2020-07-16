import React from "react";

import "./custom-button.style.scss";

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherCustomButtonProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  );
};
