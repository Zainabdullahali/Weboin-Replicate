import React from "react";
import { Link } from "react-router-dom";
import "../Components/NavBar.css";

function NavBar() {
  return (
    <div className="nav__bar">
      <div className="menu__bar">
        <Link to="/">
          <h2 className="h2">LearnHub</h2>
        </Link>
        <Link to="/form">
          <p>Admin</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
