import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./navBarMobileStyles.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const NavBarMobile = () => {
  //Responsive Hamburger
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const hamburgerBtnHandler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  const contentProps = useSpring({
    opacity: hamburgerActive ? 1 : 0,
    right: hamburgerActive ? 0 : -500,
  });

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

        <button className="hamburger" onClick={hamburgerBtnHandler}>
          {hamburgerActive ? (
            <FontAwesomeIcon icon={faTimes} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2xl" />
          )}
        </button>
      </div>
      {hamburgerActive ? (
        <animated.ul className="navBarList" style={contentProps}>
          <li>
            <Link to="/" onClick={hamburgerBtnHandler}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={hamburgerBtnHandler}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/sign-in" onClick={hamburgerBtnHandler}>
              Sign In
            </Link>
          </li>
        </animated.ul>
      ) : null}
    </nav>
  );
};

export default NavBarMobile;
