import React, { useState } from "react";

import CartProvider from "../src/store/CartProvider";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
