import React from "react";
import About from "./About";
import SignUp from "./SignUp";
import Quote from "./Quote";

function home() {
  return (
    <div className="home">
      <h2>Welcome to Quotify</h2>
      <About />
      <SignUp />
      <Quote />
    </div>
  );
}

export default home;
