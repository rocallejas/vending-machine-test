import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { timeout } from "../../reducers/orderSlice";

export const Order = ({ order, index }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(timeout({ ...order, index }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [order]);

  return (
    <>
        <tr>
          <th scope="row">{index+1}</th>
          <td>{order.name}</td>
          <td>{order.quantity}</td>
          <td>{order.time}</td>
          <td>{order.status}</td>
          <td>{order.dateOrder}</td>
        </tr>      
    </>
  );
};
