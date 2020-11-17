import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addProduct } from "../../actions/product";

const ModalPopup = ({ show, setShow, productEditId }) => {
  const [product, setProduct] = useState({
    productName: "",
    image: "",
    productCategory: "",
    productCondition: "",
    price: 0,
  });

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    console.log(product);

    // addProduct({
    //   productName: product.productName,
    //   image: product.image,
    //   productCategory: product.productCategory,
    //   productCondition: product.productCondition,
    //   price: product.price,
    // });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const renderEditProduct = () => {
    return <div>hi</div>;
  };

  const renderAddProduct = () => {
    return (
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitAdd}>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                placeholder="Upload image"
                value={product.image}
                onChange={handleChange}
                name="image"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={product.productName}
                onChange={handleChange}
                name="productName"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Category"
                  value={product.productCategory}
                  onChange={handleChange}
                  name="productCategory"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCondition">
                <Form.Label>Condition</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Condition"
                  value={product.productCondition}
                  onChange={handleChange}
                  name="productCondition"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Product Price"
                  value={product.price}
                  onChange={handleChange}
                  name="price"
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  return <>{productEditId === -1 ? renderAddProduct() : renderEditProduct()}</>;
};

const mapStateToProps = (state) => {
  const { products } = state;
  console.log(products);
  return {
    allProducts: products.allProducts,
    productEditId: products.productEditId,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);
