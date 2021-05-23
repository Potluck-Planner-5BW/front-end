// import {useState} from 'react';
import './App.css';
import './index'
import { Route, Switch } from "react-router-dom";
import Login from './Components/Login'
import Home from './Components/Home'




 function App() {
  

  return (
    <>
    <div className="App" >
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>   
         
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/Foodlist">
          <FoodList/>
        </Route>
      </Switch>
    </div>

    </>
    
  );
};
export default App;

//PSUEDO-COMPONENTS Placed here to mitigate errors TO BE REMOVED LATER


function FoodList(props) {
  return null;  
}




