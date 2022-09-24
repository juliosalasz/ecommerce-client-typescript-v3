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
      console.log(response);
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

/*import { useNavigate } from "react-router-dom";

import { Fragment, useState } from "react";
import { useDispatch } from "react-redux/es/exports";

//redux
import { useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cartSelectors";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

import "./signInForm.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  const dispatch = useDispatch();
  const received = props.received;
  //Cart context to know if coming from checkout
  const cartItems = useSelector(selectCartItems);

  //
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const navigate = useNavigate();

  //reset inputs after submission
  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  //for checking if user comes from chekout
  const isComingfromCheckout = () => {
    if (received === "cartModal" && cartItems) {
      navigate("/checkout");
    } else {
      navigate(-1);
    }
  };

  //For creating user with google
  const logGoogleUser = async () => {
    dispatch(googleSignInStart());

    //re send to other place
    isComingfromCheckout();
  };

  //for sending the data to the log in a new user
  const handleSubmit = async (event) => {
    event.preventDefault();

    //send user to server
    try {
      dispatch(emailSignInStart(email, password));
      //Will reset the form
      resetFormFields();
      isComingfromCheckout();
    } catch (error) {
      //For types of errors
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password For Email");
          break;
        case "auth/user-not-found":
          alert("No user Associated with this email");
          break;
        default:
          console.log("User login encountered an error", error);
      }
    }
  };

  //set the form input info into the state
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const changeSignHandler = () => {
    props.onInOrUpHandler();
  };

  return (
    <Fragment>
      <h2>LOG IN</h2>

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
        <Button type="button" buttonType="google" onClick={logGoogleUser}>
          <FontAwesomeIcon icon={faGoogle} /> <p>Sign In with google</p>
        </Button>
      </div>
      <div className="signUpLink">
        Not a member?
        <Button buttonType="signUpLink" onClick={changeSignHandler}>
          Sign Up
        </Button>
      </div>
    </Fragment>
  );
};

export default SignInForm;
 */