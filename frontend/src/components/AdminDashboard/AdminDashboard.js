import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

export const AdminDashboard = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <br />

      <h2>
        Welcome: {name} | <a href="/"> Logout</a>
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
  const { admin, user } = state;
  return {
    name: user.firstName,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminDashboard));
