import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form);
  };

  return (
    <div>
      <h1>Add Product</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
