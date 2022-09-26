import { useParams } from "react-router-dom";
import { Product } from "../../types/ProductTypes";
import { Link } from "react-router-dom";
import "./ItemCardStyles.css";

const ItemCard = (product: Product) => {
  const params = useParams();

  return (
    <div className="productCard" key={product.id}>
      <Link to={`/shop/${params.id}/${product.id}`}>
        <img
          src={`https://tech-ecommerce-server.herokuapp.com/${product.imageUrl}`}
          alt={product.name}
          className="cardImage"
        />
      </Link>

      <h3>{product.brand}</h3>
      <Link className="itemTitle" to={`/shop/${params.id}/${product.id}`}>
        {product.name}
      </Link>
    </div>
  );
};

export default ItemCard;
