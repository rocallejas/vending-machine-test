import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { selectCount } from "../../reducers/orderSlice";

import { Order } from "./Order";

function Orders() {
  const orders = useSelector(selectCount);
  //console.log(orders)
  //const dispatch = useDispatch();
  return (
    <>
      <Table bordered hover responsive size="" striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Estimated delivery</th>
            <th>Status</th>
            <th>Order date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return <Order order={order} key={index} index={index} />;
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Orders;
