import "./CartItemStyles.css";

import { ServerUrl } from "../../api/Api";

import { ProductToBeAdded } from "../../types/ProductTypes";

const CartItem = (cartItem: ProductToBeAdded) => {
  const { imageUrl, name, quantity, feature } = cartItem;
  return (
    <div className="cartItemContainer">
      <img src={`${ServerUrl}${imageUrl}`} alt={name} />
      <div className="cartItemDetails">
        <h2>{name?.toUpperCase()}</h2>
        <span className="cartDetails">Details: {feature}</span>
        <span className="cartQuantity">Quantity: {quantity}</span>
      </div>
    </div>
  );
};
export default CartItem;

/*   sku: string | undefined;
  name: string | undefined;
  imageUrl: string | undefined;
  price: Number | undefined;
  quantity: number; */

/* import "./cartItemStyles.css";

const CartItem = ({ cartItem }) => {
  const { name, quantity, feature, image } = cartItem;
  return (
    <div className="cartItemContainer">
      <img
        src={`https://tech-ecommerce-server.herokuapp.com/${image}`}
        alt={name}
      />
      <div className="cartItemDetails">
        <h2>{name.toUpperCase()}</h2>
        <span>Details: {feature}</span>
        <span>Quantity: {quantity}</span>
      </div>
    </div>
  );
};
export default CartItem;
 */
