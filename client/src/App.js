import React from "react";
//--------------components----------------------------
import Home from "./components/Pages/Home/Home";
import Help from "./components/Pages/Help/Help";
import Nav from "./components/Nav/Nav";
import LogIn from "./components/Pages/Login/LogIn";
import Workspace from "./components/Workspace/Workspace";
import Register from "./components/Pages/Register/Register";
import Footer from "./components/Footer/Footer";
import NavLogin from "./components/Nav/NavLogin";
//----------------Routing--------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//----------------redux-----------------------------------
import { useSelector } from "react-redux";

function App() {
  //------redux---------------------------------------
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <Router>
      <div className="app">
        {isLogged ? <NavLogin /> : <Nav />}
        <Switch>
          <Route
            exact
            path="/"
            component={() => (isLogged ? <Workspace /> : <Home />)}
          />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LogIn} />
          <Route path="/help" component={Help} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
