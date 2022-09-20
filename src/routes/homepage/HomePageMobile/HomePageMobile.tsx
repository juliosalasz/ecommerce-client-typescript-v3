import SwipperBannerMobile from "../../../components/SwipperBannerMobile/SwipperBannerMobile";

import "./HomePageMobileStyles.css";

const HomePageMobile = () => {
  return (
    <div>
      <div className="homeHeader">
        <h2>
          TECH JUST
          <br /> FOR YOU
        </h2>
        <h3>Because you Deserve it!</h3>
      </div>
      <SwipperBannerMobile />
    </div>
  );
};

export default HomePageMobile;
