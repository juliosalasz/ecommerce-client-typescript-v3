import { IFeaturedItemsProps } from "../../types/FearturedItems";
import React from "react";

import "./FeaturedMenuItemsStyle.css";

const FeaturedMenuItems: React.FC<IFeaturedItemsProps> = (
  item: IFeaturedItemsProps
) => {
  const largeImage = item.size ? "itemLarge" : null;
  return (
    <div
      className={`featuredMenuItems ${item.size}`}
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className={`menuItemInfo ${largeImage}`}>
        <h2>{item.name}</h2>
        <h3>{item.price}</h3>
      </div>
    </div>
  );
};

export default FeaturedMenuItems;
