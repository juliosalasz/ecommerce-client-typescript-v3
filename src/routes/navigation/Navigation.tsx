import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import useScreenType from "react-screentype-hook";

import NavBarDesktop from "./components/navBarDesktop/NavBarDesktop";
import NavBarMobile from "./components/NavBarMobile/NavBarMobile";

import "./navigationStyles.css";

const Navigation = () => {
  const screenType = useScreenType({
    mobile: 400,
    tablet: 800,
    desktop: 1000,
    largeDesktop: 1600,
  });
  return (
    <Fragment>
      {screenType.isMobile ? <NavBarMobile /> : <NavBarDesktop />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
