import React, { useState} from "react";
import { Card, CardBody, Col, CardText, CardTitle, Form, Input, InputGroup, Button } from "reactstrap";
import "./Item.css";
import ThumbImage from "./ThumbImage";

function Item({ item }) {
  const value = 0;
  const [counter, setCounter] = useState(value);

  // handles
  const handleAdd = () => {
    setCounter(Number(counter) + 1);
  };

  const handleSubtract = () => {
    if (counter > 0) setCounter(Number(counter) - 1);
    else setCounter(value);
  };

  const handleOnChange = (e) => {
    const { target } = e;
    const amount =
      target.type === "checkbox"
        ? target.checked
        : e.target.value.replace(/\D/, "");

    setCounter(Number(amount));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
      <Card className="shadow">
        <div className="container-thumbnail">
          <ThumbImage img={item.thumbnail} />
        </div>
        <CardBody>
          <CardTitle tag="h5" className="text-center mb-2 text-truncate card-subtitle">{item.name}</CardTitle>
          <CardText></CardText>
          <CardText className="text-center">
            <small className="text-muted">
            Estimated preparation time - {item.preparation_time}s
            </small>
          </CardText>
          <Form onSubmit={handleOrder}>
            <InputGroup>
              <Button color="danger" outline size="sm" onClick={handleSubtract}>
                -
              </Button>
              <Input
                id="txtAmount"
                name="quantity"
                type="text"
                bsSize="sm"
                placeholder="0"
                className="text-center"
                value={counter}
                onChange={handleOnChange}
              />
              <Button color="success" outline size="sm" onClick={handleAdd}>
                +
              </Button>
            </InputGroup>            
            <Button className="btn-order" block color="success" size="sm" outline type="submit" >
              Order
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Item;
