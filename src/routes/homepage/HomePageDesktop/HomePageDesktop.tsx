import { Fragment } from "react";

import SwipperBanner from "../../../components/SwipperBanner/SwipperBanner";

import "./HomePageDesktopStyles.css";

const HomePageDesktop = () => {
  return (
    <Fragment>
      <div className="homePageContainer">
        <div className="gridHomepageContainer">
          <div className="homeHeader">
            <h2>
              TECH JUST
              <br /> FOR YOU
            </h2>
            <h3>Because you Deserve it!</h3>
          </div>
          <SwipperBanner />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageDesktop;
