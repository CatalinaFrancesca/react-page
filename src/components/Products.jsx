import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Outlet } from "react-router-dom";

const Products = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.productStyle}>
      <Box>
        <img
          src="https://encolombia.com/wp-content/uploads/2018/05/Claves-Aumentar-Ventas.png"
          alt="logo"
          className={classes.exchange}
        />
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          className={classes.productsTitle}
        >
          We offer you the following list of products:
        </Typography>

        <Outlet />
      </Box>
    </Grid>
  );
};

export default Products;
