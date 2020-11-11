import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../shared/Layout';

export const AdminDashboard = () => {
  return (
    <Layout>
      <section className="m-5">
        <div>
          <h1>Administrator Page</h1>
          <p>This is the administrator's page</p>
        </div>

        <div>
          <h2>
            Welcome: Jane | <Link to="/login">Logout</Link>
          </h2>
          <div>
            <Link to="/admin/products">Product Inventory</Link>
            <p>Here you can view, check and modify inventory</p>
          </div>
          <div>
            <Link to="/admin/customers">Customer Management</Link>
            <p>Here you can view the customer information</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
