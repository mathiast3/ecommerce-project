import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Button, Row, Col, Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { clearCart, deleteFromCart } from "../../actions/cart";

export const Cart = ({ items, total, clearCart, deleteFromCart }) => {
  let history = useHistory();
  const [itemDelete, setItemDelete] = useState(-1);

  useEffect(() => {
    if (itemDelete !== -1) {
      console.log(itemDelete);
      deleteFromCart(itemDelete);
    }
  }, [itemDelete]);

  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Cart</h1>
          <p>All selected products in your shopping cart</p>
        </Container>
      </Jumbotron>

      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <Button variant="danger" onClick={clearCart}>
            Clear Cart
          </Button>

          <Button variant="success" onClick={() => history.push("/billing")}>
            Checkout
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Condition</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p, row) => {
              return (
                <tr key={row}>
                  <td>{p.productName}</td>
                  <td>{p.productCategory}</td>
                  <td>{p.productCondition}</td>
                  <td>{p.price}</td>
                  <td>
                    <Button
                      sm="true"
                      value={row.id}
                      onClick={() => setItemDelete(row)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
            {/* <tr>
              <td>Sofa</td>
              <td>500</td>
              <td>1</td>
              <td>500</td>
              <td>
                <AiOutlineClose />
              </td>
            </tr> */}
          </tbody>
        </Table>
        <Button onClick={() => history.push("/products")}>
          Continue Shopping
        </Button>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    items: cart.items,
    total: cart.total,
  };
};

const mapDispatchToProps = { clearCart, deleteFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
