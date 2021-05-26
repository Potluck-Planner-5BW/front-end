import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home-Page/Home";
import SignupForm from "./components/register/SignUpForm";
import LogInForm from "./components/register/LogInForm";
import { PrivateRoute } from "./helpers/privateRoute";
import UserProfile from "./components/UserProfile/UserProfile";
import UpdateProfile from "./components/UserProfile/UpdateProfile";
import EditItem from "./components/Items/EditItem";
import ItemsList from "./components/Items/ItemsList";
import { ItemContext } from "./components/Contexts/ItemContext";

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <ItemContext.Provider value={{ itemList, setItemList }}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/sign-up" component={SignupForm} />

          <Route path="/sign-in" component={LogInForm} />

          <PrivateRoute exact path="/my-Potluck" component={ItemsList} />

          <PrivateRoute exact path="/edit-plant/:id" component={EditItem} />

          <PrivateRoute path="/my-profile" component={UserProfile} />

          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    </ItemContext.Provider>
  );
}

export default App;

