// import Animate from 'animate.css-react'
// import 'animate.css/animate.css'
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
  // navItems.style.display ="none"
  navItems.classList.remove("view-nav")
  cancel.classList.remove("vis");
  bars.style.display = "block";
  // setTimeout(() => {
  //   navItems.style.display = "none"
  // }, 500);
};

const SignInNav = () => {
  return (
    <nav>
      <div className="logo">&gt;_ Nees</div>
      <div className="nav-items" >
        <ul>
          <Link href="/">
            <li>
              <DashboardIcon />
              Dashboard
            </li>
          </Link>
          <Link href="/">
            <li>
              <StorageIcon />
              Tabal
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
