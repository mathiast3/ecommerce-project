import { connect } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { getAllUsers } from "../../api/getAllUsers";
import { fetchError, fetchSuccess } from "../../actions/users";

export const CustomerManager = ({
  fetchError,
  fetchSuccess,
  getAllUsers,
  allUsers,
}) => {
  // renders up and down arrows indicating sort direction
  const sortStyling = (order, column) => {
    let up = String.fromCharCode(9652);
    let down = String.fromCharCode(9662);

    if (!order)
      return (
        <span>
          &nbsp;&nbsp;
          <font color="lightgrey">
            {down}
            {up}
          </font>
        </span>
      );
    else {
      return (
        <span>
          &nbsp;&nbsp;<font color="black">{order === "asc" ? up : down}</font>
        </span>
      );
    }
  };

  const renderTable = () => {
    //const products = props.allCustomers;
    const columns = [
      {
        dataField: "userId",
        text: "ID",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "firstName",
        text: "First Name",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "lastName",
        text: "Last Name",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "email",
        text: "Email",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "role",
        text: "Role",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
    ];

    return (
      <BootstrapTable
        keyField="id"
        data={allUsers}
        columns={columns}
        striped
        hover
        borderless
        condensed
      />
    );
  };

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
        {renderTable()}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { customers } = state;
  return {
    allUsers: customers.allUsers,
  };
};

const mapDispatchToProps = { fetchError, fetchSuccess, getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManager);
