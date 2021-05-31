import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [isPop, setIsPop] = useState(false);
  const { cartState, setCartState } = useContext(CartContext);
  const { items } = cartState;
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.amount;
  var total = 0;
  var array = [...cartState.items];
  total = array.reduce(reducer, 0);
  console.log(array);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsPop(true);
    var id = setTimeout(() => {
      setIsPop(false);
    }, 300);
    return()=>{clearTimeout(id)};
  }, [total]);

  return (
    <button
      className={`${classes.button} ${isPop ? classes.bump : " "} `}
      onClick={props.showCartHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default HeaderCartButton;
