import "./App.css";
import Nav from "../Nav/Nav";

// rfcredux
function App(props) {
  return (
    <div>
      <h3>App component</h3>
      <Nav />
      <props.ChildComponent />
    </div>
  );
}

export default App;
