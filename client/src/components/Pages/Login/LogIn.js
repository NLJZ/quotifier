import React, { useEffect } from "react";
import LogInForm from "./LoginForm";
//-----animations on scrolling-----------------------
import Aos from "aos";
import "aos/dist/aos.css";

function SignIn() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="sign-in">
      <h2 className="h2-forms home-header">Please sign in here</h2>
      <LogInForm />
    </div>
  );
}

export default SignIn;
