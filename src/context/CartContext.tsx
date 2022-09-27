import { createContext, useState, FC } from "react";
import { ProductToBeAdded } from "../types/ProductTypes";

export type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: ProductToBeAdded[];
  addItemToCart: (productToAdd: ProductToBeAdded) => void;
};

type ProviderProps = {
  children: JSX.Element;
};

const addCartItem = (
  cartItems: ProductToBeAdded[],
  productToAdd: ProductToBeAdded
) => {
  //check if object has the same sku
  const itemSkuCheck = cartItems.filter(
    (product) => product.sku === productToAdd.sku
  );
  if (itemSkuCheck) {
    return cartItems.map((product) =>
      product.sku === productToAdd.sku
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider: FC<ProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductToBeAdded[]>([]);

  const addItemToCart = (productToAdd: ProductToBeAdded) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
