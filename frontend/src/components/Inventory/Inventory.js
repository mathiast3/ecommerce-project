import { connect } from "react-redux";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import "./Inventory.css";
import { Link, useHistory } from "react-router-dom";
import {
  fetchError,
  fetchSuccess,
  deleteProduct,
  setProductEditId,
} from "../../actions/product";
import { setAllProducts, getAllProducts } from "../../api/getAllProducts";
import axios from "axios";
import { URI_DEL } from "../../constants/uriRoutes";

export const Inventory = ({
  isAdmin,
  allProducts,
  fetchSuccess,
  fetchError,
  setAllProducts,
  getAllProducts,
  deleteProduct,
  setProductEditId,
}) => {
  const [show, setShow] = useState(false);
  const [itemDelete, setItemDelete] = useState(-1);
  const history = useHistory();

  useEffect(() => {
    if (itemDelete !== -1) {
      // deleteProductById();
      deleteProduct(itemDelete);
    }
  }, [itemDelete]);

  const deleteProductById = () => {
    const src = `${URI_DEL}/product/${itemDelete}`;
    return axios
      .delete(src, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  };

  const renderAddProduct = () => {
    return (
      <>
        <Link to="/addproduct">
          <Button size="sm">Add Product</Button>
        </Link>
      </>
    );
  };

  const handleClickEdit = (e) => {
    setProductEditId(e.target.value);
    history.push("/editproduct");
  };

  const handleClickDelete = (e) => {
    setItemDelete(e.target.value);
  };

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

  // passed into row: {id: 1, productName: "", category ...}
  const optionsFormatter = (cell, row) => {
    return (
      <span>
        <>
          {" "}
          <Button sm="true" value={row.id} onClick={handleClickEdit}>
            Edit
          </Button>
        </>
        <Button sm="true" value={row.id} onClick={handleClickDelete}>
          Delete
        </Button>
      </span>
    );
  };

  const renderTable = () => {
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
    // const openProduct = (id) => {
    //
    // };
    const rowEvents = {
      onClick: (e, row) => {
        setProductEditId(row.id);
        history.push(`/products/${row.id}`);
      },
    };

    return (
      <BootstrapTable
        keyField="id"
        data={allProducts}
        columns={isAdmin ? adminColumns : columns}
        defaultSorted={defaultSorted}
        rowEvents={rowEvents}
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
      <p>
        {isAdmin
          ? "Select an item to edit or delete a product"
          : "Select a row to view the item in more detail"}
      </p>
      {renderTable()}
      {isAdmin ? renderAddProduct() : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user, products } = state;
  return {
    allProducts: products.allProducts,
    isAdmin: user.isAdmin,
  };
};

const mapDispatchToProps = {
  fetchSuccess,
  fetchError,
  setAllProducts,
  getAllProducts,
  deleteProduct,
  setProductEditId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
