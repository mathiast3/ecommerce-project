import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addProduct } from "../../actions/product";
import { useHistory } from "react-router-dom";

export const AddProduct = ({ addProduct }) => {
  const history = useHistory();

  const [product, setProduct] = useState({
    productName: "",
    image: "",
    productCategory: "",
    productCondition: "",
    price: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct({
      productName: product.productName,
      image: product.image,
      productCategory: product.productCategory,
      productCondition: product.productCondition,
      price: product.price,
    });

    history.push("/dashboard");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((p) => ({
      ...p,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            placeholder="Upload image"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Category"
              name="productCategory"
              value={product.productCategory}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCondition">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Condition"
              name="productCondition"
              value={product.productCondition}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Product Price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    productEditId: products.productEditId,
  };
};
const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
