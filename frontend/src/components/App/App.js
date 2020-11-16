import "./App.css";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { setDataLoaded } from "../../actions/index";
import { setAllProducts } from "../../api/getAllProducts";

// rfcredux
function App(props) {
  const { allProducts } = props;
  useEffect(() => {
    props.setAllProducts();
  }, []);

  const renderView = () => {
    if (!props.dataLoaded) return <Loading />;
    else return null;
  };
  return (
    // <div style={{ marginBottom: '70px' }}>
    <div className="con">
      <Nav />
      {/* {renderView()} */}

      <div className="App">
        <props.ChildComponent />
        {/* {props.dataLoaded ? <props.ChildComponent /> : <Loading />} */}
      </div>
      <footer>&copy; 2020 Company Inc .Privacy .Terms</footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { auth, products } = state;
  return {
    dataLoaded: auth.dataLoaded,
    allProducts: products.allProducts,
  };
};

const mapDispatchToProps = {
  setAllProducts,
  setDataLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
