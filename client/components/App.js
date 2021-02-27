import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Status from "./Status";
import Settings from "./Settings";

const app = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
};

export default app;