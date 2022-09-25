import { ServerUrl } from "../../../api/Api";
import { Link } from "react-router-dom";
import { Category } from "../../../types/ProductTypes";

import "./ShopCategoryDisplayStyles.css";

type Products = {
  products: Category[] | undefined | null;
};

const ShopCategoryDisplay = (products: Products) => {
  const productCategory = products.products;

  const popular = productCategory?.filter(
    (productCategory) => productCategory.POPULAR
  );

  return (
    <div className="displayContainer">
      <ul className="displayList">
        {popular?.map((popular) => {
          return (
            <li
              key={popular.id}
              style={{
                backgroundImage: `url(${ServerUrl}${popular.imageUrl})`,
              }}
            >
              <Link
                to={`/shop/${popular.Category}`}
                className="shopCategoryDisplay"
              >
                <div className="displayInterior">
                  <h2>{popular.Category}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ShopCategoryDisplay;
