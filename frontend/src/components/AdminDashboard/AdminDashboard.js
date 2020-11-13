import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/login.js";

export const AdminDashboard = (props) => {
  const { name } = props;

  const handleLogout = () => {
    props.logoutUser();
  };
  return (
    <div>
      <h1>Administrator Page</h1>

      <br />

      <h2>
        Welcome: {name} |{" "}
        <Link to="/" onClick={handleLogout}>
          {" "}
          Logout
        </Link>
      </h2>
      <br />

      <h3>
        <Link to="/products">Product Inventory</Link>
      </h3>
      <p>Here you can view, check and modify the product inventory</p>

      <h3>
        <Link to="/customers">Customer Management</Link>
      </h3>
      <p>Here you can view the customer information</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user, admin } = state;
  return {
    name: user.firstName,
    loggedIn: admin.loggedIn,
  };
};

const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminDashboard));
