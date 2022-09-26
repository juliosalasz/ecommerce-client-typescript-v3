import { Category } from "../../types/ProductTypes";
import Button from "../../components/Button/Button";

import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import useScreenType from "react-screentype-hook";

import {
  ListButtonToggle,
  ProductPageContainer,
  StockContainer,
  ProductImage,
  ProductStockPrice,
  ProductPageWrapper,
  ProductTitle,
} from "./productPageStyles";

import "./productPageStyles.css";

const ProductPage = () => {
  const screenType = useScreenType();

  //fetch json
  const [products, setProducts] = useState<Category[]>();
  useEffect(() => {
    const fetchData = async () => {
      const dataFetch = await fetch(
        "https://tech-ecommerce-server.herokuapp.com/products/getProducts"
      )
        .then((response: Response) => response.json())
        .then((res: Category[]) => setProducts(res))
        .catch((err: Error) => console.log(err));
      return dataFetch;
    };
    fetchData();
  }, []);

  //state for tab
  const [skuState, setSkuState] = useState(0);

  //destructure for getting the product info
  const location = useLocation();
  const categoryName = location.pathname.split("/");

  //find the category of product
  const categoryPath = products?.filter(
    (category) => category.Category === categoryName[2]
  );

  //find the id of product. productObject will be the final result with the product info
  const productObject = categoryPath?.[0].PRODUCTS.filter(
    (product) => product.id === Number(categoryName[3])
  );
  const propObject = productObject?.[0];

  //get price of product
  const [price, setPrice] = useState<number | undefined>(
    propObject?.skus[0].price
  );

  //Change price of product
  const priceHandler = (i: number) => {
    setSkuState(i);
    setPrice(propObject?.skus[i].price);
  };

  return (
    <ProductPageWrapper>
      <ProductPageContainer>
        <ProductImage
          src={`https://tech-ecommerce-server.herokuapp.com/${propObject?.imageUrl}`}
          alt={propObject?.name}
          className="productImage"
        />
        <div className="productInfo">
          <ProductTitle>{propObject?.name.toUpperCase()}</ProductTitle>
          <ProductStockPrice>
            <h3 className="productPrice">
              {propObject?.skus[0].price ? propObject?.skus[0].price : price}
            </h3>
            <StockContainer>
              {propObject?.skus[skuState].quantity !== 0 ? (
                <p className="stock">IN STOCK</p>
              ) : (
                <p className="noStock">OUT OF STOCK</p>
              )}
            </StockContainer>
          </ProductStockPrice>
          <div className="productDescription">
            <p>{propObject?.description}</p>
          </div>
          <span className="stockNumber">
            Stock avaible: {propObject?.skus[skuState].quantity}
          </span>
          <ul className="skuList">
            {propObject?.skus.map((sku, i) => {
              return (
                <ListButtonToggle
                  active={skuState === i}
                  className="skuList"
                  key={sku.sku}
                  onClick={() => priceHandler(i)}
                >
                  {sku.feature}
                </ListButtonToggle>
              );
            })}
          </ul>
          {propObject?.skus[skuState].quantity !== 0 ? (
            <Button
              type="button"
              buttonType={`${
                screenType.isDesktop ? "cartButton" : "cartDisplay"
              }`}
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              buttonType={`${
                !screenType.isMobile ? "disabled" : "disabledCart"
              }`}
            >
              Add to cart
            </Button>
          )}
        </div>
      </ProductPageContainer>
    </ProductPageWrapper>
  );
};

export default ProductPage;

//{`$${price}`}
