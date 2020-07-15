import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { FormInput } from "../../components/form-input/form-input.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import "./sign-up.style.scss";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });

  let handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName, password });
      setFormData({
        password: "",
        confirmPassword: "",
        displayName: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password, displayName, confirmPassword } = formData;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your email and password!</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
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

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign UP</CustomButton>
      </form>
    </div>
  );
};
