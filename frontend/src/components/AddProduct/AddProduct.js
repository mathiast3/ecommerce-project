import React from "react";
import { connect } from "react-redux";

const AddProduct = () => {
  return <div>I am add product</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
