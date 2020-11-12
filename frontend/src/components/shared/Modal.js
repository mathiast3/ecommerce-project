import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

const ModalPopup = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              placeholder="Upload image"
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Product Category" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCondition">
              <Form.Label>Condition</Form.Label>
              <Form.Control type="text" placeholder="Product Condition" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Product Price" />
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

export default ModalPopup;
