import React, { Fragment } from "react";

import HeaderCartButton from "./HeaaderCartButton";
import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;
