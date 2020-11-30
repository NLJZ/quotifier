import React, { useEffect } from "react";
//-----animations on scrolling-----------------------
import Aos from "aos";
import "aos/dist/aos.css";
//----------------------
import Background from "./img/booksstapple.jpg";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const backgroundImage = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")",
  };

  return (
    <section className="about section-scroll" style={backgroundImage}>
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
