import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { listProducts } from "./FunctionService";

const ProductsIndex = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading ....</div>;
  }
  return (
    <Grid className={classes.productsGrid}>
      {products.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Button variant="contained" onClick={() => navigate(+1)}>
        Next
      </Button>
    </Grid>
  );
};

export default ProductsIndex;
