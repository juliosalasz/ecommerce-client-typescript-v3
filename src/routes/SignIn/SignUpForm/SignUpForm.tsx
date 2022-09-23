import React, { Fragment } from "react";
import { useState } from "react";
import { createuAuthUserWithEmailandPassword } from "../../../utils/firebaseUtils/firebaseUtils";
import { StateProps } from "../../../types/SignInOrUpType";
import { createUserFromAuth } from "../../../api/Api";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../../components/FormInput/FormInput";
import Button from "../../../components/Button/Button";

import "./SignUpFormStyles.css";

interface DefaultFromFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = (props: StateProps) => {
  const [formFields, setFormFields] =
    useState<DefaultFromFields>(defaultFormFields);

  const [errorMessage, setErrorMessage] = useState<string>();

  const { name, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    //password must be check if equal to confirm password
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      //Send to google auth
      const response = await createuAuthUserWithEmailandPassword(
        email,
        password
      );
      //Send to server
      if (!response?.user) return setErrorMessage("Authentication Failed");
      const userToServer = {
        name: name,
        email: response?.user.email,
      };
      await createUserFromAuth(userToServer);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Cannot create user, email already in use.");
      }
      setErrorMessage("User creation encountered an error");
      console.log(error);
    }
    resetFormFields();
  };

  return (
    <Fragment>
      <div className="signUp" onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        {!errorMessage ? null : errorMessage}
        <form className="signUpForm">
          <FormInput
            onIcon={faUser}
            placeholder="Name"
            label="Name"
            type="text"
            required
            name="name"
            onChange={handleChange}
            value={name}
          />
          <FormInput
            placeholder="Email"
            onIcon={faEnvelope}
            label="Email"
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={email}
          />
          <FormInput
            placeholder="Password"
            onIcon={faLock}
            label="Password"
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={password}
          />
          <FormInput
            placeholder="Confirm Password"
            onIcon={faLock}
            label="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="signUpLink">
        Already a member?
        <button className="btnChange" onClick={props.signInOrUpHandler}>
          Log In
        </button>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
