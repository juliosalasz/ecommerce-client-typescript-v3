import { createContext, useState, FC, useEffect } from "react";

import { Category } from "../types/ProductTypes";

export type ProductContextType = {
  products: Category[] | undefined;
};

type ProviderProps = {
  children: JSX.Element;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

export const ProductsProvider: FC<ProviderProps> = ({ children }) => {
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
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
