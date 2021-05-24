import './App.css';
import './index'
import { Route, Switch } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import { schema } from './Components/validation/formSchema';

const initialFormValues = {
  email: '',
  password: '',
  remember_me: false
}

const initialError = {
  email: '',
  password: ''
}

const disableNow = true;

 /* -------- STATE USED ------------  */ 
  /* -------- STATE USED ------------  */ 
  /* -------- STATE USED ------------  */ 

 function App() {
  const [user, setUser] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialError);
  const [disable, setDisable] = useState(disableNow);

  /* -------------------------- HELPERS -------------------------- */
  /* -------------------------- AXIOS -------------------------- */
  /* -------------------------- PLUS -------------------------- */

  const postNewUser= (newUser) => {
    axios
      .post('https://reqres.in/api/orders/',newUser)
      .then(({data}) =>{
        setUser([data, ...user]);
        console.log(data)
      })
      .catch(error => console.log('Error Posting Users:', error));
  };
  
  /* -------- CHANGE HANDLER ------------  */ 
  /* -------- CHANGE HANDLER ------------  */ 
  /* -------- CHANGE HANDLER ------------  */ 
  const inputChange = (event)  => {
    const { name, value, checked, type } = event.target
    const inputValue = type === "checkbox" ? checked : value

    yup
      .reach(schema, name)
      .validate(inputValue)
      .then(() => 
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      )
      .catch((err) =>
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      );

      setFormValues({
        ...formValues,
        [name]: inputValue
      })
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisable(!valid));
  }, [formValues]);

  /* -------- SUBMIT HANDLER ------------  */ 
  /* -------- SUBMIT HANDLER ------------  */ 
  /* -------- SUBMIT HANDLER ------------  */ 
  const submitForm = () => {
    postNewUser(formValues)
    console.log(postNewUser)
  }



  return (
    <>
    <div className="App" >
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>   
         
        <Route path="/login">
          <Login 
          values ={formValues}
          change ={inputChange}
          submit ={submitForm}
          disable ={disable}
          error ={formErrors}
          
          />
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

//PSUEDO-COMPONENTS Placed here 2 mitigate errors TO BE REMOVED LATER


function FoodList(props) {
  return null;  
}




