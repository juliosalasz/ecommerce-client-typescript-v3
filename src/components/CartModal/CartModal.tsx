import { useTransition, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import CartItem from "../CartItem/CartItem";

import "./CartModalStyles.css";

const CartModal = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);

  const transitions = useTransition(isCartOpen, {
    expires: 0,
    from: { opacity: 0, transform: "translateX(40px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(40px)" },
    reverse: isCartOpen,
    delay: 200,
  });

  const closeCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  //Go to checkout button
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cartModalWrapper">
      <div className="cartBackDrop" onClick={closeCart}></div>
      {transitions((props, item) => {
        return (
          item && (
            <animated.div style={props} className="cartModalContainer">
              <div className="cartTitle">
                <h1>MY CART</h1>
              </div>
              <ul className="cartItems">
                {cartItems.length === 0 ? (
                  <li>
                    <p>No Cart Items yet</p>
                  </li>
                ) : (
                  cartItems.map((item) => (
                    <li key={item.sku}>
                      <CartItem {...item} />
                    </li>
                  ))
                )}
              </ul>

              <div className="cartBtn">
                {cartCount === 0 ? (
                  <Button buttonType="disabledCart">Go to Checkout</Button>
                ) : (
                  <Button buttonType="cartDisplay" onClick={goToCheckout}>
                    Go to Checkout
                  </Button>
                )}
                <Button buttonType="cartDisplay" onClick={closeCart}>
                  Close Cart
                </Button>
              </div>
            </animated.div>
          )
        );
      })}
    </div>
  );
};

export default CartModal;
