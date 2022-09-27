import { Link } from "react-router-dom";
import { useScrollPostion } from "../../../../hooks/useScrollPosition";

import CartIcon from "../../../../components/CartIcon/CartIcon";
import { UserContextInterface } from "../../../../context/userContext";

import "./navBarDesktop.css";

type onCLickProps = {
  signOut: () => Promise<void>;
};

type NavProps = UserContextInterface & onCLickProps;

const NavBarDesktop = (props: NavProps) => {
  const scrollPosition = useScrollPostion();

  return (
    <nav className="navBar">
      <div
        className={`${scrollPosition > 0 ? "scrollY" : "null"} navContainer`}
      >
        <h1>TECHItOut</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {props.currentUser ? (
              <span className="navLink" onClick={props.signOut}>
                Sign Out
              </span>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </li>

          <li>
            <CartIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
