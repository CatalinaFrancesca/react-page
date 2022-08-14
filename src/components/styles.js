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
  nav: {
    marginBottom: "0px",
    color: "#dcedc8",
    padding: "6px 12px",
    textDecoration: "none",
    borderRadius: "8px",
    border: "2px solid #33691e",
    backgroundColor: "#dcedc8",
    fontSize: "35px",
    alignContent: "space-around",
    a: {
      color: "#827717",
      padding: "6px 12px",
      textDecoration: "none",
      borderRadius: "4px",
      active: {
        color: "#827717",
        border: "2px solid #45aae8",
      },
    },
  },

  products: {
    width: "450px",
    marginTop: "25px",
    alignContent: "center",
    backgroundColor: "#ffe082",
  },
  productStyle: {
    display: "flex",
    flexDirection: "column",
  },
}));
