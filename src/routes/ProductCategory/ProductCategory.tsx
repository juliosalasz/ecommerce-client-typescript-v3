import { useContext } from "react";
import ShopCategoryBar from "../shop/ShopCategoryBar/ShopCategoryBar";

import ItemCard from "../../components/ItemCard/ItemCard";

import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import useScreenType from "react-screentype-hook";

import {
  CategoryWrapper,
  CategoryContainer,
  CategoryProductDisplay,
  CategoryDisplay,
} from "./productCategoryStyles";

const ProductCategory = () => {
  const { products } = useContext(ProductContext);

  //product filter
  const params = useParams();
  const paramFilter = products?.filter(
    (category) => category.Category === params.id
  );
  //screentype render
  const screenType = useScreenType({
    mobile: 425,
    tablet: 767,
    desktop: 1024,
    largeDesktop: 1600,
  });
  return (
    <CategoryWrapper id="productCategory">
      <CategoryDisplay>
        {!screenType.isMobile ? <ShopCategoryBar products={products} /> : null}
        <CategoryContainer>
          <h1>{params.id}</h1>
          <CategoryProductDisplay>
            {paramFilter?.[0].PRODUCTS.map((entry) => (
              <ItemCard key={entry.id} {...entry} />
            ))}
          </CategoryProductDisplay>
        </CategoryContainer>
      </CategoryDisplay>
    </CategoryWrapper>
  );
};

export default ProductCategory;
