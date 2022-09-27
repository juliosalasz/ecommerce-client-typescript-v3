import { Category } from "../../../types/ProductTypes";
import { Link } from "react-router-dom";
import "./ShopCategoryBarStyles.css";

type Products = {
  products: Category[] | undefined;
};

const ShopCategoryBar = (products: Products) => {
  const productCategory = products.products;
  return (
    <div className="categoryBarContainer">
      <h2 className="categoryTitle">CATEGORIES</h2>
      <ul className="categoryBarList">
        {productCategory?.map((category) => {
          return (
            <li key={category.id}>
              <Link className="BarListStyle" to={`/shop/${category.Category}`}>
                <div className="categoryListEntry">
                  <h2>{category.Category}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopCategoryBar;

/*

 {productCategory.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`/shop/${category.Category}`}>
                <div className="categoryListEntry">
                  <h2>{category.Category}</h2>
                </div>
              </Link>
            </li>
          );
        })}

*/
