import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/HomeA";
import SignupForm from "./Components/register/SignUpForm";
import LogInForm from "./Components/register/LogInForm";
import { PrivateRoute } from "./helpers/privateRoute";
import UserProfile from "./Components/UserProfile/UserProfile";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import FoodForm from "./Components/Items/FoodForm";
import FoodsList from "./Components/Items/FoodList";
import { ItemContext } from "./Components/Contexts/ItemContext";
import FoodCard from "./Components/Items/FoodCard";

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

          <Route exact path="/food-form" component={FoodForm} />

          <PrivateRoute exact path="/food-list" component={FoodsList} />

          <PrivateRoute exact path="/add_dish/:id" component={FoodCard} />

          <PrivateRoute path="/my-profile" component={UserProfile} />

          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    </ItemContext.Provider>
  );
}

export default App;

