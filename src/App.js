import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  HeaderMobile,
  NavMobile,
  Home,
  Messages,
  Manage,
  Settings,
} from "./components";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
          <HeaderMobile />
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/messages" exact component={() => <Messages />} />
            <Route path="/manage" exact component={() => <Manage />} />
            <Route path="/settings" exact component={() => <Settings />} />
          </Switch>
          <NavMobile />
        </Router>
      </div>
    </div>
  );
}

export default App;
