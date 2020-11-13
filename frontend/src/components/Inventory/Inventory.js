import { connect } from "react-redux";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import "./Inventory.css";
import ModalPopup from "../Modal/Modal";
import deleteProductById from "../../api/deleteProductById";
import { fetchError, fetchSuccess } from "../../actions/product";
import { setAllProducts, getAllProducts } from "../../api/getAllProducts";

export const Inventory = ({
  isAdmin,
  allProducts,
  fetchSuccess,
  fetchError,
  setAllProducts,
  getAllProducts,
}) => {
  const [update, setUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const [itemDelete, setItemDelete] = useState(0);
  const [itemEdit, setItemEdit] = useState(0);
  const [prod, setProd] = useState([]);

  // useEffect(() => {
  //   setAllProducts()
  //     .then((result) => setProd(result))
  //     .catch((err) => console.log(err));
  // }, []);

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    console.log(itemDelete, prod);
    if (itemDelete !== 0) {
      deleteProductById(itemDelete);

      setUpdate(true);
      // setAllProducts()
      //   .then((result) => {
      //     setProds(result);
      //   })
      //   .catch((err) => console.log(err));
    }
    setAllProducts()
      .then((result) => setProd(result))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   if (update) {
  //     setAllProducts()
  //       .then((result) => setProd(result))
  //       .catch((err) => console.log(err));
  //     setUpdate(false);
  //   }
  // }, [update, allProducts]);
  // }, []);

  // useEffect(() => {
  //   setAllProducts();
  //   // .then((result) => {
  //   //   setProds(result);
  //   //   fetchSuccess();
  //   // })
  //   // .catch((err) => fetchError(err));
  // }, []);

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
  const handleClickEdit = (e) => {
    setItemEdit(e.target.value);
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
        <Button sm="true" value={row.id} onClick={handleClickEdit}>
          Edit
        </Button>{" "}
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
        // history.push(`/admin/product/${row.id}`);
      },
    };

    return (
      <BootstrapTable
        keyField="id"
        data={prod}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
