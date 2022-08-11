import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import SelectConcert from "../components/SelectConcert";
import SelectTicket from "../components/SelectTicket";

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#e4efd6",
    display: "flex",
    flexDirection: "row",
    margin: 20,
    padding: 10,
    justifyContent: "space-around",
  },
  lilGrid: {
    margin: 10,
  },

  twoGrids: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    margin: "10px",
    width: 1200,
    color: "black",
    fontSize: "60px",
    fontStyle: "italic",
    fontFamily: "Helvetica Neue",
    backgroundColor: "#a3ad98",
    height: 90,
  },
}));

export function ReserveTicket() {
  const classes = useStyles();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    number: "",
    city: "",
    street: "",
  });

  return (
    <Grid container className={classes.grid}>
      <Typography
        variant="h6"
        color="inherit"
        component="div"
        className={classes.title}
      >
        Reserve your ticket from here!
      </Typography>

      <Grid className={classes.twoGrids}>
        <Grid className={classes.lilGrid}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            placeholder="ex: Catalina"
            onChange={(event) =>
              setForm({ ...form, firstName: event.target.value })
            }
            className={classes.textField}
          />
          <Grid />
          <Grid className={classes.lilGrid}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              placeholder="ex: Pripis"
              onChange={(event) =>
                setForm({ ...form, lastName: event.target.value })
              }
            />
          </Grid>
        </Grid>

        <Grid>
          <Grid className={classes.lilGrid}>
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              placeholder="ex: 0725..."
              onChange={(event) =>
                setForm({ ...form, number: event.target.value })
              }
            />
          </Grid>
          <Grid className={classes.lilGrid}>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              placeholder="ex: Codlea"
              onChange={(event) =>
                setForm({ ...form, city: event.target.value })
              }
            />
          </Grid>
        </Grid>

        <Grid>
          <Grid className={classes.lilGrid}>
            <TextField
              id="outlined-basic"
              label="Street"
              variant="outlined"
              placeholder="ex: str. Laterala"
              onChange={(event) =>
                setForm({ ...form, street: event.target.value })
              }
            />
            <SelectConcert />
          </Grid>
        </Grid>
      </Grid>
      <SelectTicket />
    </Grid>
  );
}
