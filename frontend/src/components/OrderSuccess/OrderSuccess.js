import { connect } from "react-redux";

export const OrderSuccess = () => {
  return <div>success</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);