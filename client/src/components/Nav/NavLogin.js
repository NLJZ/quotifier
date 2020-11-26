import React, { useState, useEffect } from "react";
import NavLoginIconAvatar from "./NavLoginIconAvatar";
import NavLoginIconThreeDots from "./NavLoginIconThreeDots";
import NavLoginIconResponsive from "./NavLoginIconResponsive";

function NavLogin() {
  const [width, setWidth] = React.useState(window.InnerWidth);
  const breakPoint = 800;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className="nav-container-login">
      {width < breakPoint ? (
        <div className="menu-top-icons-resp ">
          <NavLoginIconResponsive />
        </div>
      ) : (
        <p className="nav-logo">"QUOTIFIER"</p>
      )}

      <div className="menu-top-icons ">
        <NavLoginIconAvatar />
        <NavLoginIconThreeDots />
      </div>
    </div>
  );
}

export default NavLogin;
