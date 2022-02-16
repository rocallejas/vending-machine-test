import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Item({ item }) {
  return (
    <Card>
      <CardImg alt="{item.name}" src={item.thumbnail} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardText></CardText>
        <CardText>
          <small className="text-muted">
            Preparation time - {item.preparation_time}
          </small>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Item;
