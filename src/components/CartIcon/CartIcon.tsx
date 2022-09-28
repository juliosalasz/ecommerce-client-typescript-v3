import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartIconStyles.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const openCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="CartIcon" onClick={openCartHandler}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <div className="CartNumber">
        <p>{cartCount}</p>
      </div>
    </div>
  );
};

export default CartIcon;
