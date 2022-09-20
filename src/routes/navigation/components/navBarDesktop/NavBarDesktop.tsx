import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./navBarDesktop.css";

const NavBarDesktop = () => {
  return (
    <nav className="navBar">
      <div className="navContainer">
        <h1>TECHItOut</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>

          <li>
            <div className="CartIcon">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="CartNumber">
                <p>0</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
