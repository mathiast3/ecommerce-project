import { connect } from "react-redux";
import { Form, FormControl, Button, Table } from "react-bootstrap";

export const CustomerManager = () => {
  const customers = [
    {
      name: "Rahul",
      email: "rahul@email.com",
      phone: "12345678",
      username: "rahul",
      enabled: true,
    },
    {
      name: "Kumar",
      email: "kumar@email.com",
      phone: "12345678",
      username: "rahul",
      enabled: false,
    },
  ];
  return (
    <section className="m-5">
      <div>
        <h1>Customer Management Page</h1>
        <p>This is the customer management page</p>
      </div>

      <div>
        <Form inline className="justify-content-end my-3">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.username}</td>
                <td>{customer.enabled}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManager);
