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
  });

  return (
    <>
      <div>{order.time}</div>
      <div>{order.status}</div>
    </>
  );
};
