import { createContext, useState, FC, useEffect } from "react";
import { ProductToBeAdded } from "../types/ProductTypes";

export type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: ProductToBeAdded[];
  addItemToCart: (productToAdd: ProductToBeAdded) => void;
  cartCount: number;
};

type ProviderProps = {
  children: JSX.Element;
};

const addCartItem = (
  cartItems: ProductToBeAdded[],
  productToAdd: ProductToBeAdded
) => {
  //check if object has the same sku
  const itemSkuCheck = cartItems.find(
    (product) => product.sku === productToAdd.sku
  );

  if (itemSkuCheck) {
    return cartItems.map((product) =>
      product.sku === productToAdd.sku
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }
  return [...cartItems, { ...productToAdd }];
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider: FC<ProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductToBeAdded[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: ProductToBeAdded) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
