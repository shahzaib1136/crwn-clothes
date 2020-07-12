import React, { useState } from "react";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

export const SignIn = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = value;

  let handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
