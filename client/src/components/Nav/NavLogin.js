import React from "react";
import NavLoginIconAvatar from "./NavLoginIconAvatar";
import NavLoginIconThreeDots from "./NavLoginIconThreeDots";
import NavLoginIconResponsive from "./NavLoginIconResponsive";

function NavLogin() {
  return (
    <div className="nav-container-login">
      <div className="menu-top-icons-resp ">
        <NavLoginIconResponsive />
      </div>
      <div className="menu-top-icons ">
        <NavLoginIconAvatar />
        <NavLoginIconThreeDots />
      </div>
    </div>
  );
}

export default NavLogin;
