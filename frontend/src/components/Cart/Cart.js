import React from 'react';
import { connect } from 'react-redux';
import { Container, Jumbotron, Button, Row, Col, Table } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

export const Cart = () => {
  let history = useHistory();

  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Cart</h1>
          <p>All selected products in your shopping cart</p>
        </Container>
      </Jumbotron>

      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}>
          <Button variant="danger">Clear Cart</Button>

          <Button variant="success">Checkout</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sofa</td>
              <td>500</td>
              <td>1</td>
              <td>500</td>
              <td>
                <AiOutlineClose />
              </td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={() => history.push('/products')}>
          Continue Shopping
        </Button>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
