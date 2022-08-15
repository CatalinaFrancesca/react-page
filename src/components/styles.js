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

  productsTitle: {
    marginTop: "25px",
    textAlign: "center",
    backgroundColor: "#dcedc8",
    display:'flex',
    flexDirection: "column",
    fontSize:"30px",
  },
  productStyle: {
    display: "flex",
    flexDirection: "column",
  },
  exchange: {
    margin:"25px",
    height: 300,
    weight: 120,
  },
  productsGrid:{
    fontSize:30,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
  },
  backstageGrid:{
    fontSize:30,
   color: '#827717',
   fontFamily:'"Segoe UI Symbol"',
  },
  button:{
    margin:10,
  }
}));
