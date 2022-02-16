import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../layouts/Skeleton";
import Item from "../layouts/Item";
import "./Products.css";
import { CardColumns, Container } from "reactstrap";

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
        }, 3000);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      <h1>Available Products</h1>
      <CardColumns>
        {isLoading ? (
          <Skeleton />
        ) : (
          products.data.map((product) => (
            <Item key={product.id} item={product} />
          ))
        )}
      </CardColumns>
    </Container>
  );
};

export default Products;
