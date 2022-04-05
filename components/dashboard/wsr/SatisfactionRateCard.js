import React from "react";
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';

const SatisfactionRateCard = () => {
  return (
    <div className="s-card">
      <h2>Satisfaction Rate</h2>
      <span>From all projects</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 100 200 200"
      >
        <linearGradient
          id="grd_tn4663r06u8g"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientTransform="rotate(90, .5, .5)"
        >
          <stop offset={0} stopColor="rgba(0, 117, 255, 0)" />
          <stop offset={100} stopColor="#0075ff" />
        </linearGradient>
        <circle
          cx={200}
          cy={200}
          r="92.5"
          stroke="#22234B"
          strokeWidth={15}
          fill="none"
        />
        <circle
          cx={200}
          cy={200}
          r="92.5"
          fill="none"
          strokeWidth={15}
          strokeDasharray="581.1946409141117"
          strokeDashoffset="116.23892818282229"
          strokeLinecap="round"
          stroke="url(#grd_tn4663r06u8g)"
          style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
        />
      </svg>
      <div className="icon">
        <EmojiEmotionsRoundedIcon />
      </div>
      <div className="bases">
        <div className="percent">95%</div>
        <span>Based on likes</span>
      </div>
    </div>
  );
};

export default SatisfactionRateCard;
