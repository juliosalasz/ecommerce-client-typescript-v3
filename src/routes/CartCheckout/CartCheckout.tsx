import "./CartCheckoutStyles.css";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Button from "../../components/Button/Button";

//this page must do 4 things

//must gather a total amount of prices. This must come from cartContext

const CartCheckout = () => {
  const { cartCount, cartItems, cartTotal } = useContext(CartContext);
  return (
    <section className="checkOutContainer">
      <div className="checkoutInterior">
        <h2 className="checkoutTitle">CHECKOUT</h2>
        <div className="parent">
          <div className="products">
            <span>Products</span>
          </div>
          <div className="description">
            <span>Description</span>
          </div>
          <div className="quantity">
            <span>Quantity</span>
          </div>
          <div className="price">
            <span>Price</span>
          </div>
          <div className="remove">
            <span>Remove</span>
          </div>
        </div>
        <div className="cartItems1">
          {cartCount === 0 ? (
            <p className="noItems">No Cart Items yet</p>
          ) : (
            cartItems.map((item) => {
              return <CheckoutItem key={item.sku} {...item} />;
            })
          )}
        </div>
        <span className="totalCheckout">
          TOTAL: ${Math.round(cartTotal * 100) / 100}
        </span>
        <Button>Continue To Payment</Button>
      </div>
    </section>
  );
};

export default CartCheckout;

/* 

import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import CheckoutItem from "../../components/checkOutItem/checkOutItem";
import "./checkoutStyles.css";

import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from "../../store/cart/cartSelectors";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  console.log(cartCount);
  const cartTotal = useSelector(selectCartTotal);

  //we can put a state here that opens up the shipping adress.
  const navigate = useNavigate();
  const shippingLinkHandler = () => {
    navigate("/checkout/shipping");
  };

  return (
    <section className="checkOutContainer">
      <h2>CHECKOUT</h2>
      <div className="parent">
        <div className="products">
          <span>Products</span>
        </div>
        <div className="description">
          <span>Description</span>
        </div>
        <div className="quantity">
          <span>Quantity</span>
        </div>
        <div className="price">
          <span>Price</span>
        </div>
        <div className="remove">
          <span>Remove</span>
        </div>
      </div>
      <div className="cartItems1">
        {cartCount === 0 ? (
          <p>No Cart Items yet</p>
        ) : (
          cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })
        )}
      </div>

      <span className="totalCheckout">
        TOTAL: ${Math.round(cartTotal * 100) / 100}
      </span>
      <Button onClick={shippingLinkHandler}>Continue To Payment</Button>
    </section>
  );
};

export default CheckOut;


*/
