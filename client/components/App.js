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
import Control from "./Control";
import Configure from "./Configure";
import Create from "./Create";
import Collaborate from "./Collaborate";

const app = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/control" component={Control} />
          <Route exact path="/configure" component={Configure} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/collaborate" component={Collaborate} />
        </Switch>
      </Router>
    </div>
  );
};

export default app;
