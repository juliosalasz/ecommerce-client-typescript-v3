import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartIconStyles.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const openCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="CartIcon" onClick={openCartHandler}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <div className="CartNumber">
        <p>0</p>
      </div>
    </div>
  );
};

export default CartIcon;
