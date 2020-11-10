import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import store from "./store";
import { Provider } from "react-redux";
import createRoutes from "./routes";

const routes = createRoutes();

// <App />
ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    {routes}
    {/* </React.StrictMode> */}
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
