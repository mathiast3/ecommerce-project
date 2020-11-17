import { connect } from "react-redux";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { addTransaction } from "../../actions/transactions";
export const OrderConfirmation = ({
  items,
  total,
  firstName,
  lastName,
  email,
  addTransaction,
}) => {
  let history = useHistory();

  const handleClickOrder = () => {
    addTransaction();
    history.push("/success");
  };

  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Confirmation</h1>
          <p>Review your order below</p>
        </Container>
      </Jumbotron>

      <Container>
        <h3>Receipt: ${total} total</h3>
        <br />

        <h5>Shipping Address</h5>
        <br />

        <h5>Billing Address</h5>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>

        <Button onClick={handleClickOrder}>Place your order</Button>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart, user } = state;
  return {
    items: cart.items,
    total: cart.total,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
};

const mapDispatchToProps = { addTransaction };

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);
