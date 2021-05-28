import React from "react";
import { useHistory } from "react-router-dom";

import "./home.styles.css";

export default function Home() {
  const { push } = useHistory();

  return (
    <div className="home-container">
      <img
        className="home-img"
        src="https://cdn.apartmenttherapy.info/image/upload/v1572888417/k/Design/2019-11/Potluck-revised.jpg"
        alt="home-made"
      />
      <div className="home-slogan-container">
        <h1 className="home-slogan">Let's Get Together</h1>
        <h2 className="home-wording">And Have Some Joy!</h2>
        <div className="home-nav-links">
          <button
            onClick={() => push("/sign-up")}
            type="button"
            class="home-signup btn btn-outline-success"
          >
            Sign Up
          </button>
          <button
            onClick={() => push("/LogIn-form")}
            type="button"
            class="home-signin btn btn-outline-success"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
