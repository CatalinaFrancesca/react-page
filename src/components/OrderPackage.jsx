import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orderPackage } from "./FunctionService";
import useStyles from "./styles";

const OrderPackage = () => {
  const [order, setOrderPackage] = useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const data = await orderPackage();
      setOrderPackage(data);
    })();
  }, []);
  if (order === null) {
    return <div></div>;
  }

  return (
    <Grid className={classes.backstageGrid}>
      {order.map((item) => (
        <div key={item.totalAmount}>{item.valability}</div>
      ))}
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Grid>
  );
};

export default OrderPackage;
