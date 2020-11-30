import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavLoginIconAvatar from "./NavLoginIconAvatar";
import NavLoginIconThreeDots from "./NavLoginIconThreeDots";
import NavLoginIconResponsive from "./NavLoginIconResponsive";

const NavLogin = (props) => {
  const quoteViewerOn = useSelector((state) => state.quoteViewer);

  const [showGreeting, setShowGreeting] = useState(quoteViewerOn);
  console.log(showGreeting);
  const [width, setWidth] = useState(window.InnerWidth);
  const breakPoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setShowGreeting(false);
    console.log("quoteViewerOff");
  };

  return (
    <div className="nav-container-login">
      {width < breakPoint ? (
        <div className="menu-top-icons-resp ">
          <NavLoginIconResponsive />
        </div>
      ) : (
        <button className="nav-logo-button" onClick={handleChange}>
          <p className="nav-logo">"quotifier"</p>
        </button>
      )}

      <div className="menu-top-icons ">
        <NavLoginIconAvatar />
        <NavLoginIconThreeDots />
      </div>
    </div>
  );
};

export default NavLogin;
