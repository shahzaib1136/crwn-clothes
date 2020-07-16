import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "./store/user/user.actions";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { ShopePage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    let unSubsubcribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        let userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else dispatch(setCurrentUser(authUser));
      return authUser;
    });

    return () => unSubsubcribeFromAuth();
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              !currentUser ? <SignInAndSignUpPage /> : <Redirect to="/" />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
