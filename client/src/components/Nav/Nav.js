import React from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <p className="nav-logo">"QUOTIFIER"</p>
      <ul className="nav-links">
        <li className="nav-link home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link sign-in-link">
          <Link to="/login">Sign in</Link>
        </li>
        <li className="nav-link sign-up-link">
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
