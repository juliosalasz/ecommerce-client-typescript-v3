import { useEffect, useState } from "react";

import ShopCategoryBar from "./ShopCategoryBar/ShopCategoryBar";
import ShopCategoryDisplay from "./ShopCategoryDisplay/ShopCategoryDisplay";

import { Category } from "../../types/ProductTypes";

import "./ShopStyles.css";

const Shop = () => {
  const [products, setProducts] = useState<Category[]>();
  useEffect(() => {
    fetch("https://tech-ecommerce-server.herokuapp.com/products/getProducts")
      .then((response: Response) => response.json())
      .then((res: Category[]) => setProducts(res))
      .catch((err: Error) => console.log(err));
  }, []);

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
