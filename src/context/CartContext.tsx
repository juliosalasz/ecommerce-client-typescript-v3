import { createContext, useState, FC, useEffect } from "react";
import { ProductToBeAdded } from "../types/ProductTypes";

export type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: ProductToBeAdded[];
  addItemToCart: (productToAdd: ProductToBeAdded) => void;
  cartCount: number;
  removeItemFromCart: (productToAdd: ProductToBeAdded) => void;
  clearItemFromCart: (productToAdd: ProductToBeAdded) => void;
  cartTotal: number;
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

const removeCartItem = (
  cartItems: ProductToBeAdded[],
  productToRemove: ProductToBeAdded
) => {
  const itemSkuCheck = cartItems.find(
    (product) => product.sku === productToRemove.sku
  );

  if (productToRemove.quantity === 1) {
    return cartItems.filter((product) => product.sku !== productToRemove.sku);
  }

  if (itemSkuCheck) {
    return cartItems.map((product) =>
      product.sku === productToRemove.sku
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
  }

  return [...cartItems, { ...productToRemove }];
};

const clearItem = (
  cartItems: ProductToBeAdded[],
  productToClear: ProductToBeAdded
) => {
  return cartItems.filter((product) => product.sku !== productToClear.sku);
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider: FC<ProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductToBeAdded[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: ProductToBeAdded) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove: ProductToBeAdded) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear: ProductToBeAdded) => {
    setCartItems(clearItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
