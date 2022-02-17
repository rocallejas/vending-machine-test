import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../layouts/Skeleton";
import Item from "../layouts/Item";
import "./Products.css";
import { Row, Container, Alert } from "reactstrap";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://vending-machine-test.vercel.app/api/products"
        );
        setProducts(res.data);
      } catch (err) {
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1600);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      <br />
      <Alert color="secondary">
        <h4 className="alert-heading">Available Products</h4>
        <p>
          This is a vending machine app, if you want some of the available
          products just select the quantity and press the order button.
        </p>
        <hr />
        <p className="mb-0">
          Please consider the estimated preparation time for each product.
        </p>
      </Alert>
      
      <Row>
        {isLoading ? (
          <Skeleton />
        ) : (
          products.data.map((product) => (
            <Item key={product.id} item={product} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
