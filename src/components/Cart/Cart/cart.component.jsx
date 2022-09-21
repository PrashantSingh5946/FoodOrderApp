import Modal from "../../UI/Modal/modal.component";
import classes from "./Cart.module.css";
import CartItem from "./Cartitem/CartItem";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Cart = (props) => {
  const { cartState, setCartState } = useContext(CartContext);
  var totalAmount = cartState.totalAmount.toFixed(2);
  const amount = `$${totalAmount}`;

  const hasItems = cartState.items.length > 0;

  const calculateTotal = (items) => {
    const initialValue = 0;
    const sumWithInitial = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount * currentValue.price,
      initialValue
    );
    return sumWithInitial;
  }

  const cartItemRemoveHandler = (id) => {

    var index = cartState.items.findIndex((item) => item.id === id);
    
    
    if (cartState.items[index].amount > 1) {
      var temp = [...cartState.items];
      temp[index].amount--;
      setCartState({
        items: [...temp],
        totalAmount: calculateTotal(temp),
      });
<<<<<<< HEAD
    } else {
      var temp = cartState.items.filter((item,myIndex) => myIndex!=index);
      var deduction = cartState.items[index].price;
      setCartState({ items: [...temp], totalAmount: cartState.totalAmount-deduction });
=======
    } else if (cartState.items[index].amount == 1) {
      var temp = [...cartState.items];
      temp = temp.filter((item) => item.id != id);
      setCartState({ items: [...temp], totalAmount: calculateTotal(temp) });
>>>>>>> 30db6afa307933dd43d4c64fc4de3bdc134965a9
    }
  };

  const cartItemAddHandler = (id) => {
    var index = cartState.items.findIndex((item) => item.id === id);
    var temp = { ...cartState };
    temp.items[index].amount++;
    temp.totalAmount += temp.items[index].price;
    setCartState({ ...temp });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartState.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.closeModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
