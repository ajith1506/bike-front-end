import "./App.css";
import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Home/Contact/Contact";
import Aboutus from "./components/Aboutus/Aboutus";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login/Login";
// import NoMatch from './components/NoMatch/NoMatch';
import Payment from "./components/Payment/Payment";
import WelcomePage from "./components/Dashboard/WelcomePage/WelcomePage";
import ServiceDetails from "./components/ServaiceDetails/ServiceDetails";
import Signup from "./components/Login/Signup/Signup";
import { AuthContext } from "./Context/AuthContext";
import GotoTop from "./components/Home/GotoTop/GotoTop";
import Order from "./components/Dashboard/Order/Order";
import PDPayment from "./components/Payment/PDPayment";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import Services from "./components/Home/Services/Services";
import Products from "./components/Home/Products/Products";
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// export const UserContext = createContext();

function App() {
  // const [loggedInUser, setLoggedInUser] = useState({});
  const { user } = useContext(AuthContext);
  // console.log(decodedTkn);

  return (
    <div className="root">
      {/* <UserContext.Provider value={[loggedInUser, setLoggedInUser, total, setTotal]}> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contacts">
          <Contact />
        </Route>
        <Route path="/about">
          <Aboutus />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>{" "}
        <Route path="/allServices">
          <Services />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/details/:_id">
          <ServiceDetails />
        </Route>
        <Route path="/pdDetails">
          <ProductsDetails />
        </Route>
        {/* PRIVATE ROUTES */}
        <Route path="/payment">{user ? <Payment /> : <Login />}</Route>
        <Route path="/PDPayment">{user ? <PDPayment /> : <Login />}</Route>
        <Route path="/dashboard">{user ? <Dashboard /> : <Home />}</Route>
        <Route path="/dashboard/welcome">
          {user ? <WelcomePage /> : <Home />}
        </Route>
        <Route path="/dashboard/ordered">{user ? <Order /> : <Home />}</Route>
      </Switch>
      <GotoTop />
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
