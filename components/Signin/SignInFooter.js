import React from "react";
import CopyrightRoundedIcon from "@material-ui/icons/CopyrightRounded";

const SignInFooter = () => {
  let date = new Date().getFullYear();
  return (
    <footer>
      <CopyrightRoundedIcon />
      {date + " "}
      Nees developed by
      <a href="https://google.com"> Mahmoud Abu-Attiya </a>&
      <a href="https://google.com"> Ahmed saber</a>
    </footer>
  );
};

export default SignInFooter;
