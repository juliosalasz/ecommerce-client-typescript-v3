import { useEffect } from "react";
import { getProducts } from "../../api/Api";

import "./ShopStyles.css";

const Shop = () => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="ShopContainer" id="CategorySection">
      <div className="CategoryContainer">
        <div className="CategoryDisplayContainer">
          <div>Component 1</div>
          <div>Component 2</div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
