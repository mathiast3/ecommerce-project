import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Nav.css";
import { logoutUser } from "../../actions/auth.js";
export const NavComponent = ({
  isAdmin,
  loggedIn,
  name,
  dataLoaded,
  history,
  logoutUser,
  items,
}) => {
  const renderLogInOut = () => {
    let label = loggedIn ? "Log Out" : "Log In";

    return (
      <Nav.Link href="" onClick={handleLogInOut}>
        {label}{" "}
      </Nav.Link>
    );
  };

  const handleLogInOut = () => {
    if (loggedIn) {
      logoutUser();
    }
    history.push("/");
  };

  const renderAdmin = () => {
    if (!isAdmin) {
      return null;
    }
    return (
      <Nav.Link href="" onClick={handleAdmin}>
        Admin
      </Nav.Link>
    );
  };

  const renderCart = () => {
    if (!loggedIn) {
      return null;
    }
    return (
      <div onClick={handleCart}>
        <Nav.Link href="">Cart ({items.length})</Nav.Link>
      </div>
    );
  };

  const handleAdmin = () => {
    history.push("/dashboard");
  };

  const handleHome = () => {
    history.push("/home");
  };

  const handleProducts = () => {
    history.push("/products");
  };

  const handleCart = () => {
    history.push("/cart");
  };
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Furniture Hub</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="" onClick={handleHome}>
            Home
          </Nav.Link>
          <Nav.Link href="" onClick={handleProducts}>
            Products
          </Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text>Welcome, {loggedIn ? name : "Guest"} </Navbar.Text>

          {/* <Navbar.Text>Welcome, {dataLoaded ? name : "Guest"} </Navbar.Text> */}
          {renderCart()}
          {renderLogInOut()}
          {renderAdmin()}
        </Nav>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { auth, user, cart } = state;
  return {
    isAdmin: user.isAdmin,
    loggedIn: auth.loggedIn,
    name: user.firstName,
    dataLoaded: auth.dataLoaded,
    items: cart.items,
  };
};

const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavComponent));
