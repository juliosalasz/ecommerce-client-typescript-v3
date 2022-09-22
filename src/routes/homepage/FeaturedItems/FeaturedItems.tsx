import MarqueeComponent from "../MarqueeComponent/MarqueeComponent";

import { FeaturedList } from "../../../utils/featuredList";
import FeaturedMenuItems from "../../../components/FeaturedMenuItems/FeaturedMenuItems";

import "./FeaturedItemsStyle.css";

const FeaturedItems = () => {
  return (
    <section className="featuredSection">
      <div className="featuredContent">
        <div className="featuredWrapper">
          <div className="featuredList">
            {FeaturedList.map((item) => (
              <FeaturedMenuItems key={item.id} {...item} />
            ))}
          </div>

          <MarqueeComponent />
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
