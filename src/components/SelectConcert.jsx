import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formControl: {
    marginTop: 10,
    minWidth: 220,
  },
}));

const SelectConcert = () => {
  const [concert, setConcert] = useState("");
  const handleChange = (event) => {
    setConcert(event.target.value);
  };
  const classes = useStyles();

  return (
    <Grid>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Events of the year
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={concert}
          onChange={handleChange}
          label="Events of the year"
        >
          <MenuItem value={10}>Twenty One Pilots</MenuItem>
          <MenuItem value={20}>Havasi</MenuItem>
          <MenuItem value={30}>Cadrle of filth</MenuItem>
          <MenuItem value={30}>Metallica</MenuItem>
          <MenuItem value={30}>Slayer</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectConcert;
