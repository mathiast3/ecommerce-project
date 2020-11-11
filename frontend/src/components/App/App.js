import './App.css';
import Nav from '../Nav/Nav';
//import { useEffect } from "react";
import { getAllUsers } from '../../api/getAllUsers';
import { connect } from 'react-redux';

// rfcredux
function App(props) {
  // useEffect(() => {
  //   props.getAllUsers();
  // });

  return (
    <div style={{ marginBottom: '70px' }}>
      <Nav />
      <div className="App">
        <props.ChildComponent />
        <footer
          className="fixed-bottom p-4 bg-dark text-white"
          style={{ height: '65px' }}
        >
          &copy; 2020 Company Inc .Privacy .Terms
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(App);