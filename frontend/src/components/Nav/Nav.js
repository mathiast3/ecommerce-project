import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Nav = () => {
  const goLogin = () => {};
  return (
    <div>
      <div onClick={goLogin}>
        <Link to="/">
          <h1>login</h1>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
