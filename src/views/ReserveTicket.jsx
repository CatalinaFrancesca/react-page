import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Grid, Typography } from "@material-ui/core";
import SelectConcert from "../components/SelectConcert";
import SelectTicket from "../components/SelectTicket";
import { Options } from "../components/Options";
import useStyles from "./styles";

export const ReserveTicket = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    number: "",
    city: "",
    street: "",
    date: "",
  });

  return (
    <Box className={classes.page}>
      <Grid>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          className={classes.title}
        >
          Reserve your ticket from here!
        </Typography>
      </Grid>

      <Grid>
        <Grid className={classes.lilGrid}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            placeholder="ex: Catalina"
            onChange={(event) =>
              setForm({ ...form, firstName: event.target.value })
            }
            className={classes.element}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            placeholder="ex: Pripis"
            onChange={(event) =>
              setForm({ ...form, lastName: event.target.value })
            }
            className={classes.element}
          />
        </Grid>

        <Grid>
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            placeholder="ex: 0725..."
            onChange={(event) =>
              setForm({ ...form, number: event.target.value })
            }
            className={classes.element}
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            placeholder="ex: Codlea"
            onChange={(event) => setForm({ ...form, city: event.target.value })}
            className={classes.element}
          />
        </Grid>

        <Grid>
          <TextField
            id="outlined-basic"
            label="Street"
            variant="outlined"
            placeholder="ex: str. Laterala"
            onChange={(event) =>
              setForm({ ...form, street: event.target.value })
            }
            className={classes.element}
          />
          <SelectConcert />
        </Grid>
        <Grid>
          <TextField
            id="date"
            label="Book your date"
            type="date"
            variant="outlined"
           defaultValue="2022-08-16"
            className={classes.elementDate}
            onChange={(event) =>
              setForm({ ...form, date: event.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid>
          <SelectTicket />
        </Grid>
        <Grid>
          <Options />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReserveTicket;
