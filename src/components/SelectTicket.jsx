import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formControl: {
    marginTop: 10,
    minWidth: 220,
  },
}));

const SelectTicket = () => {
  const [ticket, setTicket] = useState("");
  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  const classes = useStyles();

  return (
    <Grid>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Choose your ticket</FormLabel>
        <RadioGroup
          row
          aria-label="ticket"
          name="ticket1"
          value={ticket}
          onChange={handleChange}
        >
          <FormControlLabel
            value="presale"
            control={<Radio />}
            label="Premium"
          />
          <FormControlLabel
            value="accesGeneral"
            control={<Radio />}
            label="General Access - with seat"
          />
          <FormControlLabel
            value="accesGeneral2"
            control={<Radio />}
            label="General Access - without seat"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default SelectTicket;
