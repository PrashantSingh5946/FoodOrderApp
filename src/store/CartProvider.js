import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
  };

  const [cartState, setCartState] = useState(cartContext);

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
