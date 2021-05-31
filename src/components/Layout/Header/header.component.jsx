import { Fragment } from "react";
import HeaderCartButton from "./../HeaderCartButton/headerCartButton";

import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </Fragment>
  );
};
export default Header;
