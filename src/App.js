import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { ShopePage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unSubsubcribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    return () => unSubsubcribeFromAuth();
  }, []);

  return (
    <div>
      <Router>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
