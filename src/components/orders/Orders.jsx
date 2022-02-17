import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Container, Table } from "reactstrap";
import { selectCount } from "../../reducers/orderSlice";

import { Order } from "./Order";

function Orders() {
  const orders = useSelector(selectCount);
  const [isEmpty, setIsEmpty] = useState(true);
  
  useEffect(() => {
    if (orders.length > 0) 
      {setIsEmpty(false);}    
  }, []);

  return (
    <Container>
      <br />
      <Table bordered hover responsive size="">
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
          {!isEmpty ? (            
            orders.map((order, index) => {
              return <Order order={order} key={index} index={index} />;
            })
          ) : (
            <tr>
              <td colSpan={6}>                
                <Alert color="warning" className="text-center">
                  There are no pending orders!!
                </Alert>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Orders;
