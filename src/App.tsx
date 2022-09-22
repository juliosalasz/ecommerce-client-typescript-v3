import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Homepage from "./routes/homepage/Homepage";
import Shop from "./routes/shop/Shop";
import SignIn from "./routes/SignIn/SignIn";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
