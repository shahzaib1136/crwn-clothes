import React from "react";

import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.style.scss";
import { FormInput } from "../../components/form-input/form-input.component";

export const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
