import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    title: {
        marginBottom: 10,
        color: "black",
        fontSize: "60px",
        fontStyle: "italic",
        fontFamily: "Helvetica Neue",
        backgroundColor: "#a3ad98",
      },
    
      page: {
        backgroundColor: "#e4efd6",
        margin: "0",
        display: "flexBox",
        flexDirection: "row",
        padding: 10,
      },
      lilGrid: {
        margin: 0,
      },
      element: {
        margin: 10,
      },
      elementDate: {
        margin: 10,
        width: 222,
      },
}));
