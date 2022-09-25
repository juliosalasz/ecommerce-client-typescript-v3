import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import useScreenType from "react-screentype-hook";

import NavBarDesktop from "./components/navBarDesktop/NavBarDesktop";
import NavBarMobile from "./components/NavBarMobile/NavBarMobile";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { SignOutUser } from "../../utils/firebaseUtils/firebaseUtils";

import "./navigationStyles.css";

const Navigation = () => {
  const screenType = useScreenType({
    mobile: 400,
    tablet: 800,
    desktop: 1000,
    largeDesktop: 1600,
  });

  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await SignOutUser();
  };
  return (
    <Fragment>
      {screenType.isMobile ? (
        <NavBarMobile currentUser={currentUser} signOut={signOutHandler} />
      ) : (
        <NavBarDesktop currentUser={currentUser} signOut={signOutHandler} />
      )}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
