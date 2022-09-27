import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import ShopCategoryBar from "./ShopCategoryBar/ShopCategoryBar";
import ShopCategoryDisplay from "./ShopCategoryDisplay/ShopCategoryDisplay";

import "./ShopStyles.css";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <section className="ShopContainer" id="CategorySection">
      <div className="CategoryContainer">
        <div className="CategoryDisplayContainer">
          <ShopCategoryBar products={products} />
          <ShopCategoryDisplay products={products} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
