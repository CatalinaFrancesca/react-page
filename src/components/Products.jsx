import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Outlet } from "react-router-dom";

const Products = () => {
  const classes = useStyles();

  return (
    <Box>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          className={classes.products}
        >
          This is your product list
        </Typography>
        <Outlet />
    </Box>
  );
};

export default Products;
