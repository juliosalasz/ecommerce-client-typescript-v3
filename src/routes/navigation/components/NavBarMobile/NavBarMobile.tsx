import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./navBarMobileStyles.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarMobile = () => {
  //Responsive Hamburger
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const hamburgerBtnHandler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <nav className="navBarMobile">
      <div className="navContainerMobile">
        <h1>TECHItOut</h1>
        <div className="CartIconMobile">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="CartNumberMobile">
            <p>0</p>
          </div>
        </div>
        <button
          className={`hamburger ${hamburgerActive ? "isActive" : null}`}
          onClick={hamburgerBtnHandler}
        >
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">Sign In</Link>
        </button>
        ;
      </div>
    </nav>
  );
};

export default NavBarMobile;
