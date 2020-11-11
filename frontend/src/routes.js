import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import App from './components/App/App';
import Billing from './components/Billing/Billing';
import Cart from './components/Cart/Cart';
import CustomerManager from './components/CustomerManager/CustomerManager';
//import DetailPopUp from "./components/DetailPopUp/DetailPopUp" // not sure if this is needed - hold onto for now
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

import Product from './components/Products/Product';
import Register from './components/Register/Register';
/**
 * example: localhost:3000/home will render and display the Home component
 */

const createRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={(...props) => <App ChildComponent={Home} />}
      />

      <Route
        path="/addproduct"
        render={(...props) => <App ChildComponent={AddProduct} />}
      />

      <Route
        path="/dashboard"
        render={(...props) => <App ChildComponent={AdminDashboard} />}
      />
      <Route
        path="/billing"
        render={(...props) => <App ChildComponent={Billing} />}
      />
      <Route
        path="/cart"
        render={(...props) => <App ChildComponent={Cart} />}
      />

      <Route
        path="/customers"
        render={(...props) => <App ChildComponent={CustomerManager} />}
      />

      <Route
        exact
        path="/admin/product/:id"
        render={(...props) => <App ChildComponent={Product} />}
      />

      <Route
        path="/home"
        render={(...props) => <App ChildComponent={Home} />}
      />

      <Route
        path="/products"
        render={(...props) => <App ChildComponent={Inventory} />}
      />

      <Route
        path="/confirmation"
        render={(...props) => <App ChildComponent={OrderConfirmation} />}
      />

      <Route
        path="/success"
        render={(...props) => <App ChildComponent={OrderSuccess} />}
      />

      <Route
        path="/register"
        render={(...props) => <App ChildComponent={Register} />}
      /> 
    </Switch>
  </BrowserRouter>
);

export default createRoutes;