import Nav from "./Nav";
import React from "react";
import Library from "../components/Library/Library";
import Cart from "./Sample/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Use something like react-router-dom to manage multiple pages/routes

function App({books}) {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Library} />
          <Route path="/Sample" books={books} component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;