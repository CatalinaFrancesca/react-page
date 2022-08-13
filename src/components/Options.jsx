import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchOrders } from "../service/apiRequests";
import useStyles from './styles';

export const Options = () => {
  const [orders, setOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      fetchOrders().then((data) => setOrders(data));
    }, 500);
  }, []);

  useEffect(() => {
    if (orders) {
      setIsLoading(false);
    }
  }, [orders]);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell}>Order ID</TableCell>
            <TableCell> Amount </TableCell>
            <TableCell>Valability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((item) => {
            const { id, totalAmount, valability } = item;
            return (
              <TableRow key={id} className={classes.tableRow}>
                <TableCell>{id}</TableCell>
                <TableCell>{totalAmount}</TableCell>
                <TableCell>{valability}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {isLoading && <CircularProgress color="secondary" size={20} />}
    </TableContainer>
  );
};
