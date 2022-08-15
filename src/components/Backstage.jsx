import React from "react";
import { Grid } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import useStyles from "./styles";

const Backstage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.backstageGrid}>
      Here you will receive some details regarding your amount of time with the
      band:
      <Outlet />
    </Grid>
  );
};

export default Backstage;
