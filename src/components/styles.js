import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  formControl: {
    margin: 10,
  },
  formControlTicket: {
    marginTop: 10,
  },
  inputLabel: { minWidth: 225 },

  tableContainer: {
    marginTop: 25,
    display: "flex",
  },
    tableHead: {
    backgroundColor: "#a3ad98",
    fontStyle: "bold",
    color: "white",
  },
  tableRow: {
    backgroundColor: "#ccd2c6",
    fontStyle: "italic",
  },
}));
