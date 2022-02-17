import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Badge } from "reactstrap";

import { timeout } from "../../reducers/orderSlice";

export const Order = ({ order, index }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(timeout({ ...order, index }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [order, index, dispatch]);

  return (
    <>
        <tr>
          <th scope="row">{index+1}</th>
          <td> {order.name}</td>
          <td><Badge>{order.quantity}</Badge></td>
          <td><Badge color={order.time === 0 ? 'success' : 'secondary'}>{order.time}</Badge></td>
          <td><Badge color={order.status === 'Dispatched' ? 'success' : 'secondary'}>{order.status}</Badge></td>
          <td>{order.dateOrder}</td>
        </tr>      
    </>
  );
};
