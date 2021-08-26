import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Home,
  Courses,
  Messages,
  Manage,
  Settings,
} from "./components";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/courses" exact component={() => <Courses />} />
            <Route path="/messages" exact component={() => <Messages />} />
            <Route path="/manage" exact component={() => <Manage />} />
            <Route path="/settings" exact component={() => <Settings />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
