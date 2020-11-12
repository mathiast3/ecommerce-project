import { connect } from "react-redux";
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import "./Inventory.css";
import ModalPopup from "../Modal/Modal";

export const Inventory = (props) => {
  const { isAdmin } = props;
  const [show, setShow] = useState(false);

  // to do: on submit, sends to backend
  const renderAddProduct = () => {
    return (
      <>
        <Button size="sm" onClick={() => setShow(true)}>
          Add Product
        </Button>
        <ModalPopup show={show} setShow={setShow} />{" "}
      </>
    );
  };

  // maybe trigger a modal?
  const handleClickEdit = () => {};

  const handleClickDelete = () => {};

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

  const priceFormatter = (cell, row) => {
    return <span>$ {cell}</span>;
  };

  const imageFormatter = (cell, row) => {
    return (
      <span className="imgContainer">
        <img src={cell} alt="item" className="imgProduct" />
      </span>
    );
  };

  const optionsFormatter = (cell, row) => {
    return (
      <span>
        <Button sm="true" onClick={handleClickEdit}>
          Edit
        </Button>{" "}
        <Button sm="true" onClick={handleClickDelete}>
          Delete
        </Button>
      </span>
    );
  };

  const renderTable = () => {
    const products = props.allProducts;

    const columns = [
      {
        dataField: "productName",
        text: "Product Name",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "imageUrl",
        text: "Image",
        formatter: (row, cell) => imageFormatter(row, cell),
      },
      {
        dataField: "productCategory",
        text: "Product Category",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "productCondition",
        text: "Product Condition",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
      },
      {
        dataField: "price",
        text: "Product Price",
        sort: true,
        sortCaret: (order, column) => sortStyling(order, column),
        formatter: (row, cell) => priceFormatter(row, cell),
      },
    ];

    // admin has additional functionality: update, delete
    const adminColumns = columns.concat([
      {
        dataField: "",
        text: "Options",
        formatter: (row, cell) => optionsFormatter(row, cell),
      },
    ]);

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
        columns={isAdmin ? adminColumns : columns}
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
      {isAdmin ? renderAddProduct() : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { admin, user } = state;
  return {
    allProducts: admin.products,
    isAdmin: user.isAdmin,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
