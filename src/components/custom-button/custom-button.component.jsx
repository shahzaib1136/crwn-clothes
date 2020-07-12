import React, { useState, Children } from "react";

import "./custom-button.style.scss";

export const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherCustomButtonProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  );
};
