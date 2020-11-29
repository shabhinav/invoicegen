import React from "react";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import { auth } from "../firebase";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Navbar() {
  const user = useSelector(selectUser);
  return (
    <div className="navbar">
      <div className="navbar_brand">
        <h2>
          <strong>Kontext</strong>
        </h2>
      </div>
      <div className="dropdown mr-2">
        <div
          className="dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <Avatar alt="Profile" src={user.photo} />
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <span className="dropdown-item">{user.email}</span>
          <span className="dropdown-item">Invoice List</span>
          <span className="dropdown-item" onClick={() => auth.signOut()}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
