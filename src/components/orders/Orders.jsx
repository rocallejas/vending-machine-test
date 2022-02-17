import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../reducers/orderSlice";

import { Order } from "./Order";

function Orders() {
  const orders = useSelector(selectCount);
  //console.log(orders)
  //const dispatch = useDispatch();
  return (
    <>
      {orders.map((order, index) => {
        return <Order order={order} key={index} index={index} />;
      })}
    </>
  );
}

export default Orders;
