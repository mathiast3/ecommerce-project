import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { editProduct } from "../../actions/product";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const EditProduct = ({ allProducts, productEditId, editProduct }) => {
  const history = useHistory();

  const [data, setData] = useState({
    productName: "",
    image: "",
    productCategory: "",
    productCondition: "",
    price: 0,
    index: -1,
  });

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    let p;
    for (p in allProducts) {
      if (allProducts[p].id === parseInt(productEditId)) break;
    }
    let curr = allProducts[p];
    setData({
      productName: curr.productName,
      image: curr.image,
      productCategory: curr.productCategory,
      productCondition: curr.productCondition,
      price: curr.price,
      index: p,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct({
      productName: data.productName,
      image: data.image,
      productCategory: data.productCategory,
      productCondition: data.productCondition,
      price: data.price,
      index: data.index,
    });

    history.push("/products");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Edit Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            name="image"
            value={data.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            value={data.productName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="productCategory"
              value={data.productCategory}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCondition">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              type="text"
              name="productCondition"
              value={data.productCondition}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" block>
          Submit
        </Button>
      </Form>
      <br />
      <Link to="/products">
        <Button block>Cancel</Button>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    allProducts: products.allProducts,
    productEditId: products.productEditId,
  };
};
const mapDispatchToProps = { editProduct };

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
