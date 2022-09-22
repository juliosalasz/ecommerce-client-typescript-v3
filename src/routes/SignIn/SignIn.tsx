import { signInWithGooglePopup } from "../../utils/firebaseUtils/firebaseUtils";
import { createUserFromAuth } from "../../api/Api";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = {
      name: response.user.displayName,
      email: response.user.email,
    };
    const usercreated = await createUserFromAuth(user);
    console.log(usercreated);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
