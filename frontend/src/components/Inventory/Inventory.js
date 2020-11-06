import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import "./Inventory.css";

export const Inventory = () => {
  const renderTable = () => {
    const products = [
      {
        id: 0,
        name: "item0",
        price: "100",
      },
      {
        id: 1,
        name: "item1",
        price: "111",
      },
      {
        id: 2,
        name: "item3",
        price: "222",
      },
    ];

    const columns = [
      {
        dataField: "id",
        text: "Product ID",
        sort: true,
      },
      {
        dataField: "name",
        text: "Product Name",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "price",
        text: "Product Price",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
    ];

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

    const defaultSorted = [
      {
        dataField: "id",
        order: "asc",
      },
    ];

    return (
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        striped
        hover
        borderless
        condensed
      />
    );
  };

  return (
    <div>
      <h1>Product Inventory</h1>
      {renderTable()}

      <Button href="/addproduct">Add Product</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
