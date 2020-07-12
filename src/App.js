import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { ShopePage } from "./pages/shop/shop.component";
const Hatpage = () => <div>Hats page</div>;

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
