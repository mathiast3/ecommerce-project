import { connect } from "react-redux";
import { Container, Jumbotron } from "react-bootstrap";

// to do: send transaction to backend
export const OrderSuccess = () => {
  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Success!</h1>
          <p>Your order has been placed</p>
        </Container>
      </Jumbotron>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);
