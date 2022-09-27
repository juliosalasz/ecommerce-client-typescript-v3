import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebaseUtils/firebaseUtils";
import { createUserFromAuth } from "../../../api/Api";
import { StateProps } from "../../../types/SignInOrUpType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import FormInput from "../../../components/FormInput/FormInput";
import Button from "../../../components/Button/Button";

import { Fragment, useState } from "react";

import "./SignInFormStyles.css";

interface DefaultFromFields {
  email: string;
  password: string;
}

const SignInForm = (props: StateProps) => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] =
    useState<DefaultFromFields>(defaultFormFields);

  const [errorMessage, setErrorMessage] = useState<string>();

  const { email, password } = formFields;

  //functions

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeSignHandler = () => {
    props.signInOrUpHandler();
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = {
      name: response.user.displayName,
      email: response.user.email,
    };
    const usercreated = await createUserFromAuth(user);

    console.log(usercreated);
  };

  //set the form input info into the state
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //for sending the data to the log in a new user
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //send user to server
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (!response) return;

      //Will reset the form
      resetFormFields();
    } catch (error: any) {
      //For types of errors
      switch (error.code) {
        case "auth/wrong-password":
          setErrorMessage("Incorrect Password For Email");
          break;
        case "auth/user-not-found":
          setErrorMessage("No user Associated with this email");
          break;
        default:
          console.log("User login encountered an error", error);
      }
    }
  };

  return (
    <Fragment>
      <h2>LOG IN</h2>
      {!errorMessage ? null : errorMessage}
      <div className="signIn">
        <form onSubmit={handleSubmit} className="signInForm">
          <FormInput
            onIcon={faUser}
            placeholder="Email"
            label="email"
            type="text"
            required
            onChange={changeHandler}
            name="email"
            value={email}
          />
          <FormInput
            onIcon={faLock}
            placeholder="Password"
            label="password"
            type="password"
            required
            onChange={changeHandler}
            name="password"
            value={password}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="googleSignIne">
        <Button type="button" buttonType="googlebtn" onClick={logGoogleUser}>
          <FontAwesomeIcon icon={faGoogle} />
          <p>Sign In with google</p>
        </Button>
      </div>
      <div className="signUpLink">
        Not a member?
        <Button type="button" onClick={changeSignHandler} className="btnChange">
          Sign Up
        </Button>
      </div>
    </Fragment>
  );
};

export default SignInForm;
