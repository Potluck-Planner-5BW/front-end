// import {useState} from 'react';
import './App.css';
import './index'
import { Route, Switch } from "react-router-dom";






 function App() {

  return (
    <>
    <div className="App" >
      <header className="App-header">
        <img src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60aa9a598f7c9865a91a9da1_Artboard%2031.png" className="App-logo" alt="logo" />
 
        <button className="btn-color w-1/12 px flex items-center justify-center rounded-full" >
          Get Started</button>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
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

//Placed here to mitigate errors TO BE REMOVED LATER

function Home(props) {
  return null;  
}

function Login(props) {
  return(
    <h1>Hello</h1>
  );  
}

function FoodList(props) {
  return null;  
}




