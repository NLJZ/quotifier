import React, { useEffect } from "react";
//-----animations on scrolling-----------------------
import Aos from "aos";
import "aos/dist/aos.css";

function Quote() {
  // Aos.init({ duration: 2000 });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="quote section-scroll">
      <div data-aos="zoom-in">
        <p className="text-quote">
          "never miss a quote again! with quotifier you can keep all your quotes
          saved and easily find them back whenever you need them" – Gabriela
          Acha
        </p>
      </div>
    </section>
  );
}

export default Quote;
