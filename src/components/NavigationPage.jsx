import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";

const NavigationPage = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <NavLink to="/products" className={classes.prod}>
        Products
      </NavLink>
      <br />
      <NavLink to="/backstage">Backstage</NavLink>
    </nav>
  );
};

export default NavigationPage;
