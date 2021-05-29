import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home-Page/Home";
import SignupForm from "./Components/register/SignUpForm";
import LogInForm from "./Components/register/LogInForm";
import { PrivateRoute } from "./helpers/privateRoute";
import UserProfile from "./Components/UserProfile/UserProfile";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import EditItem from "./Components/Items/EditItem";
import ItemsList from "./Components/Items/ItemsList";
import { ItemContext } from "./Components/Contexts/ItemContext";

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

          <PrivateRoute exact path="/edit-item/:id" component={EditItem} />

          <PrivateRoute path="/my-profile" component={UserProfile} />

          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    </ItemContext.Provider>
  );
}

export default App;

