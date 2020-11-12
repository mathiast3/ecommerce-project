import "./App.css";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import getAllUsers from "../../api/getAllUsers";
import getUserById from "../../api/getUserById";
import deleteUserById from "../../api/deleteUserById";
import getAllProducts from "../../api/getAllProducts";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { setDataLoaded } from "../../actions/index";
// rfcredux
function App(props) {
  useEffect(() => {
    props.getAllUsers();
    props.getUserById(1);
    props.getAllProducts();
    props.setDataLoaded(true);
  }, []);

  const renderView = () => {
    if (!props.dataLoaded) return <Loading />;
    else return null;
  };
  return (
    <div>
      <Nav />
      {renderView()}

      <div className="App">
        <props.ChildComponent />
        {/* {props.dataLoaded ? <props.ChildComponent /> : <Loading />} */}
        <footer className="fixed-bottom p-4 bg-dark text-white">
          &copy; 2020 Company Inc .Privacy .Terms
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { admin, user } = state;
  return {
    customers: admin.customers,
    products: admin.products,
    userId: user.userId,
    dataLoaded: admin.dataLoaded,
  };
};

const mapDispatchToProps = {
  getAllUsers,
  getUserById,
  deleteUserById,
  getAllProducts,
  setDataLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
