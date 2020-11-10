import "./App.css";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import getAllUsers from "../../api/getAllUsers";
import getUserById from "../../api/getUserById";
import { connect } from "react-redux";

// rfcredux
function App(props) {
  useEffect(() => {
    props.getAllUsers();
    props.getUserById(1);
  });

  return (
    <div>
      <Nav />
      <div className="App">
        <props.ChildComponent />
        <footer className="fixed-bottom p-4 bg-dark text-white">
          &copy; 2020 Company Inc .Privacy .Terms
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getAllUsers, getUserById };

export default connect(mapStateToProps, mapDispatchToProps)(App);
