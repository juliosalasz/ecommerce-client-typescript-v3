import useScreenType from "react-screentype-hook";
import HomePageDesktop from "./HomePageDesktop/HomePageDesktop";
import HomePageMobile from "./HomePageMobile/HomePageMobile";
import "./homepagestyles.css";
const Homepage = () => {
  const screenType = useScreenType({
    mobile: 400,
    tablet: 800,
    desktop: 1000,
    largeDesktop: 1600,
  });
  return (
    <section className="container">
      {screenType.isMobile ? <HomePageMobile /> : <HomePageDesktop />}
    </section>
  );
};

export default Homepage;
