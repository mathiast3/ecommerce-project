import "./App.css";
import Nav from "../Nav/Nav";

// rfcredux
function App(props) {
  return (
    <div>
      <Nav />
      <props.ChildComponent />
    </div>
  );
}

export default App;
