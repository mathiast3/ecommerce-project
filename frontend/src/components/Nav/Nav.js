import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

export const NavComponent = () => {
  // temp var
  let loggedIn = false;
  let isAdmin = true;

  // add more functionality here
  const renderLogInOut = () => {
    let path = "/";
    let label = loggedIn ? "Login" : "Log Out";

    return <Nav.Link href={path}>{label} </Nav.Link>;
  };

  const renderAdmin = () => {
    if (!isAdmin) {
      return null;
    }
    return <Nav.Link href="/dashboard">Admin</Nav.Link>;
  };

  // products about contact welcome,___ logout cart |admin
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Furniture Hub</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text>Welcome, NAME </Navbar.Text>
          <Nav.Link href="/cart">Cart</Nav.Link>
          {renderLogInOut()}
          {renderAdmin()}
        </Nav>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
