import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart/cart.component";
import Header from "./components/Layout/Header/header.component";
import Meals from "./components/Meals/Meals/meals.component";
import CartProvider from "./store/CartProvider"
function App() {

  const [isCartShown,setIsCartShown] = useState(false);
  const showCartHandler = ()=>
  {
    setIsCartShown(true);
  }
  const hideCartHandler = ()=>
  {
    setIsCartShown(false);
  }


  return (
    <CartProvider>
     {isCartShown && <Cart closeModal={hideCartHandler} />}
      <Header showCartHandler={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
