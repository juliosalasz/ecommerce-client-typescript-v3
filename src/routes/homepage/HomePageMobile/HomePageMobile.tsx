import { Fragment } from "react";
import SwipperBannerMobile from "../../../components/SwipperBannerMobile/SwipperBannerMobile";

import "./HomePageMobileStyles.css";

const HomePageMobile = () => {
  return (
    <Fragment>
      <div className="homePageContainerMobile">
        <div className="gridHomepageContainerMobile">
          <div className="homeHeaderMobile">
            <h2>
              TECH JUST
              <br /> FOR YOU
            </h2>
            <h3>Because you Deserve it!</h3>
          </div>
          <SwipperBannerMobile />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageMobile;
