import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrganizerDash from "./Components/Organizer/OrganizerDash"
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home";
import SignupForm from "./Components/register/SignupForm";
import LogInForm from "./Components/register/LoginForm";
import { PrivateRoute } from "./helpers/privateRoute";
import UserProfile from "./Components/UserProfile/UserProfile";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import FoodForm from "./Components/Items/FoodForm";
import FoodsList from "./Components/Items/FoodList";
import { ItemContext } from "./Components/Contexts/ItemContext";
import FoodCard from "./Components/Items/FoodCard";
import GuestDash from "./Components/UserProfile/GuestDash";
import OrganizerSelect from "./Components/Organizer/OrganizerSelection";

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

          <Route exact path="/dashboard" component={GuestDash} />

          <Route path="/dashboard/organizer" component={OrganizerDash} />

          <Route path="/select" component={OrganizerSelect} />

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
