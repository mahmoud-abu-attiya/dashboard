import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const WelcomeCard = () => {
  return (
    <div className="w-card">
      <span>Welcome back,</span>
      <h2>Mark Johnson</h2>
      <span>Glad to see you again! Ask me anything.</span>
      <a href="#">
        Tap to record <ArrowForwardRoundedIcon />
      </a>
    </div>
  );
};

export default WelcomeCard;
