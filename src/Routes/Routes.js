import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "../Container/Menu";
import Home from "../Container/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu0" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/menu1" component={Menu} />
          <Route path="/menu2" component={Menu} />
          <Route path="/menu3" component={Menu} />
          <Route path="/menu4" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
