import "./App.css";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { connect } from "react-redux";

// rfcredux
function App(props) {
  useEffect(() => {
    props.getAllUsers();
  });

  return (
    <div>
      <Nav />
      <div className="App">
        <props.ChildComponent />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(App);
