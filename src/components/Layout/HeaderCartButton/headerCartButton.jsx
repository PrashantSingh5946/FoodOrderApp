import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const { cartState, setCartState } = useContext(CartContext);
  const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;
   var total = 0;
   var array = [...cartState.items];
   total = array.reduce(reducer,0);
   console.log(array);

  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default HeaderCartButton;
