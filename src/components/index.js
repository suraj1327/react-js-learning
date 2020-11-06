import Nav from "./Nav";
import React from "react";
import Library from "../components/Library/Library";
import SampleRoute from "./Sample/SampleRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Use something like react-router-dom to manage multiple pages/routes

function App({books}) {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Library} />
          <Route path="/Sample" books={books} component={SampleRoute} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;