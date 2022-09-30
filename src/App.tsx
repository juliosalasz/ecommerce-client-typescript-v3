import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Homepage from "./routes/homepage/Homepage";
import Shop from "./routes/shop/Shop";
import ProductCategory from "./routes/ProductCategory/ProductCategory";
import ProductPage from "./routes/ProductPage/ProductPage";
import SignIn from "./routes/SignIn/SignIn";
import CartModal from "./components/CartModal/CartModal";
import CartCheckout from "./routes/CartCheckout/CartCheckout";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

import { CartContext } from "./context/CartContext";
import { useContext } from "react";

import "./App.css";

function App() {
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      {isCartOpen ? <CartModal /> : null}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductCategory />} />
          <Route path="/shop/:id/:id" element={<ProductPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<CartCheckout />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
//
