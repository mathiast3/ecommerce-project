import { connect } from "react-redux";

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
        <a href="/products">Product Inventory</a>
      </h3>
      <p>Here you can view, check and modify the product inventory</p>

      <h3>
        <a href="/customers">Customer Management</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
