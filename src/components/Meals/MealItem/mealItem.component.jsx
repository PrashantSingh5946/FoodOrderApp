import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/mealItemForm.component";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const { cartState, setCartState } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    var index = cartState.items.findIndex((item) => item.id === props.id);
    var length = cartState.items.length;
    if (index == -1) {
        setCartState({
            items: [
              ...cartState.items,
              { id: props.id, name: props.name, amount: amount, price: props.price },
            ],
            totalAmount: cartState.totalAmount + amount * props.price,
          });
    }else
    {
        var temp = cartState.items;
        temp[index].amount+=amount;
        setCartState({items:[...temp],totalAmount:cartState.totalAmount + amount * props.price})
    }

  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
