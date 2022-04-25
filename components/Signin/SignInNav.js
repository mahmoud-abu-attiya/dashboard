import { Link } from "@material-ui/core";
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StorageIcon from "@material-ui/icons/Storage";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const handelNavMenu = () => {
  let bars = document.querySelector(".media-bars");
  let cancel = document.querySelector(".media-cancel");
  let navItems = document.querySelector(".nav-items");
  navItems.style.display = "flex"
  navItems.classList.add("view-nav")
  cancel.classList.add("vis");
  bars.style.display = "none";
};
const handelNavCancel = () => {
  let bars = document.querySelector(".media-bars");
  let cancel = document.querySelector(".media-cancel");
  let navItems = document.querySelector(".nav-items");
  navItems.classList.remove("view-nav")
  cancel.classList.remove("vis");
  bars.style.display = "block";
};

const SignInNav = () => {
  return (
    <nav>
      <div className="logo">&gt;_ Nees</div>
      <div className="nav-items" >
        <ul>
          <Link href="/dashboard">
            <li>
              <DashboardIcon />
              Dashboard
            </li>
          </Link>
          <Link href="/tables">
            <li>
              <StorageIcon />
              Table
            </li>
          </Link>
          <Link href="/">
            <li>
              <InfoRoundedIcon />
              About
            </li>
          </Link>
        </ul>
        <Link href="/" className="geast">
          Countinue as geast
        </Link>
      </div>
      <button className="media-bars" onClick={handelNavMenu}>
        <MenuRoundedIcon />
      </button>
      <button className="media-cancel" onClick={handelNavCancel}>
        <CloseRoundedIcon />
      </button>
    </nav>
  );
};

export default SignInNav;
