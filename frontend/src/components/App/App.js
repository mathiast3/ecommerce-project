import "./App.css";
import Nav from "../Nav/Nav";

// rfcredux
function App(props) {
  return (
    <div>
      <Nav />
      <div className="App">
        <props.ChildComponent />
      </div>
    </div>
  );
}

export default App;
