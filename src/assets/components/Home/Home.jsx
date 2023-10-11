import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./home.scss";
import home from "../../images/home.png";

function Home() {
  return (
    <div className="home">
      <img src={home} alt="home" />
      <h1>Добро пожаловать!</h1>
      <Link to="/list">
        <button>Get started</button>
      </Link>
    </div>
  );
}

export default Home;
