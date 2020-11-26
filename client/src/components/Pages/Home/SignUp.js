import React, { useEffect } from "react";
//-----animations on scrolling-----------------------
import Aos from "aos";
import "aos/dist/aos.css";

function SignUp() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="sign-up section-scroll">
      <div className="home-element-content" data-aos="zoom-in">
        <h2 className="home-header">Sign Up!</h2>
        <p className="text">
          never miss a quote again! with quotifier you can keep all your quotes
          saved and easily find them back whenever you need them.{" "}
        </p>
        <div className="signup-buttons">
          <button className="sign-up-single-button-light">
            sign up with email
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
