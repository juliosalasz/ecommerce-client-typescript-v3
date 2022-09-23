import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

import { useState } from "react";
// import { useLocation } from "react-router-dom";

import "./SignInStyles.css";
const SignIn = () => {
  //Sign In or Sign up tab
  const [signinOrUp, setSignInOrUp] = useState<boolean>(true);
  const inOrUpHandler = () => {
    setSignInOrUp(!signinOrUp);
  };

  // const received = useLocation().state;

  return (
    <section id="SignIn" className="signBody">
      <div className="logwrapper">
        <div className="signInWrapper">
          {signinOrUp ? (
            <SignInForm signInOrUpHandler={inOrUpHandler} />
          ) : (
            <SignUpForm signInOrUpHandler={inOrUpHandler} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
