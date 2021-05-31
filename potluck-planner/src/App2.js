import './App2.css';
import './index'
import { Route, Switch } from "react-router-dom";
import Login from './Components/Login';
import Registration from './Components/RegisterPage';
import Home from './Components/HomeA';
import { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import { schema } from './Components/validation/formSchema';
import { regSchema } from './Components/validation/RegistrationSchema';
import OrganizerDash from './Components/OrganizerDash';
import GuestDash from './Components/GuestDash';


const initialFormValues = {
  email: '',
  password: '',
  remember_me: false,
  auth_code: '',

}

const initialError = {
  email: '',
  password: '',
  remember_me: false,
  auth_code: ''
}

const disableNow = true;


const initialRegistrationValues = {
  name: '',
  email: '',
  password: ''

}

const initialRegistrationError = {
  name: '',
  email: '',
  password: ''

}

const disableRegistrationNow = true;
/* -------- STATE USED ------------  */
function App2() {

/* -------- CURRENT USER LOGIN ------------  */
  
  const [user, setUser] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialError);
  const [disable, setDisable] = useState(disableNow);
  /* -------- NEW USER REGISTRATION ------------  */

  const [setNewUser] = useState([]);
  const [registrationValues, setRegistrationValues] = useState(initialRegistrationValues);
  const [registrationErrors, setRegistrationErrors] = useState(initialRegistrationError);
  const [disableRegistration, setDisableRegistration] = useState(disableRegistrationNow);

  /* -------------------------- HELPERS -------------------------- */

  const postUser = (userx) => {
    axios
      .post('https://reqres.in/api/orders/', userx)
      .then(({ data }) => {
        setUser([data, ...user]);
        console.log(data)
      })
      .catch(error => console.log('Error Posting Users:', error));
  };

  /* -------------------------- REGISTRATION HELPERS -------------------------- */
  
  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/orders/', newUser)
      .then(({ data }) => {
        setNewUser([data, ...newUser]);
        console.log(data)
      })
      .catch(error => console.log('Error Posting Users:', error));
  };

  /* -------- CHANGE HANDLER ------------  */
  
  const inputChange = (event) => {
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
  
  const submitForm = () => {
    postUser(formValues)
    console.log(postUser)
  }

  /* -------- REGISTRATION CHANGE HANDLER ------------  */
  
  const registrationChange = (event) => {
    const { name, value, checked, type } = event.target
    const inputRegValue = type === "checkbox" ? checked : value

    yup
      .reach(regSchema, name)
      .validate(inputRegValue)
      .then(() =>
        setRegistrationErrors({
          ...registrationErrors,
          [name]: ''
        })
      )
      .catch((err) =>
        setRegistrationErrors({
          ...registrationErrors,
          [name]: err.errors[0]
        })
      );

    setRegistrationValues({
      ...registrationValues,
      [name]: inputRegValue
    })
  }

  useEffect(() => {
    regSchema.isValid(registrationValues).then((valid) => setDisableRegistration(!valid));
  }, [registrationValues]);

  /* -------- SUBMIT HANDLER ------------  */
  /* -------- SUBMIT HANDLER ------------  */
  /* -------- SUBMIT HANDLER ------------  */

  const submitRegistration = () => {
    postNewUser(registrationValues)
    console.log(postNewUser)
  }



  return (
    <>
      <div className="App2" >

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login
              values={formValues}
              change={inputChange}
              submit={submitForm}
              disabled={disable}
              error={formErrors}
            />
          </Route>

          <Route path="/Foodlist">
            <FoodList />
          </Route>

          <Route path="/Registration">
            <Registration
              rValues={registrationValues}
              rChange={registrationChange}
              rSubmit={submitRegistration}
              rDisable={disableRegistration}
              rError={registrationErrors}
            />
          </Route>

          <Route path="/dashboard/organizer">
            <OrganizerDash />
          </Route>

          <Route path="/dashboard">
            <GuestDash />
          </Route>
        </Switch>
      </div>

    </>

  );
};
export default App2;

//PSUEDO-COMPONENTS Placed here 2 mitigate errors TO BE REMOVED LATER


function FoodList(props) {
  return null;
}