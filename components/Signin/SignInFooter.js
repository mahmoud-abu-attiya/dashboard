import React from "react";
import CopyrightRoundedIcon from "@material-ui/icons/CopyrightRounded";

const SignInFooter = () => {
  let date = new Date().getFullYear();
  return (
    <footer>
      <CopyrightRoundedIcon />
      {date + " "}
      Nees developed by
      <a href="https://www.linkedin.com/in/mahmoud-abu-attiya-978496210/"> Mahmoud Abu-Attiya </a>
    </footer>
  );
};

export default SignInFooter;
