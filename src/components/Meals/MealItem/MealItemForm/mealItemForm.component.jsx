import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input/input.component";
import { useRef, useState} from "react";
const MealItemForm = (props) => {
  const amountInfoRef = useRef();
  const [isAmountValid,setIsAmountValid]= useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInfoRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmount<1 ||enteredAmount>5)
    {
        setIsAmountValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInfoRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
