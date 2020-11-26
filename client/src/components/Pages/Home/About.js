import React, { useEffect } from "react";
//-----animations on scrolling-----------------------
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section-scroll">
      <div className="home-element-content" data-aos="zoom-in">
        <h2 className="home-header">Welcome!</h2>
        <p className="text">
          never miss a quote again! with quotifier you can keep all your quotes
          saved and easily find them back whenever you need them.{" "}
        </p>
        <div className="about-buttons">
          <button className="about-single-button-dark">Register</button>
          <button className="about-single-button-dark">More InFo</button>
        </div>
      </div>
    </section>
  );
}

export default About;
