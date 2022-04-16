import React from "react";
import DragIndicatorRoundedIcon from "@material-ui/icons/DragIndicatorRounded";

const ReferralTrackingCard = () => {
  return (
    <div className="r-card">
      <div className="head">
        <h2>Referral Tracking</h2>
        <button className="three-btn">
          <DragIndicatorRoundedIcon />
        </button>
      </div>
      <div className="securty">
        <div className="securty-info">
          <div className="info">
            <span>Invited</span>
            <h2>145</h2>
            <h2>people</h2>
          </div>
          <div className="info">
            <span>Bonus</span>
            <h2>1,465</h2>
          </div>
        </div>
        <div className="securty-rate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 100 200 200"
            style={{ overflow: "visible" }}
          >
            <linearGradient
              id="grd_wbczsqe2915b"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              gradientTransform="rotate(90, .5, .5)"
            >
              <stop offset={0} stopColor="rgba(5, 205, 153, 0)" />
              <stop offset={100} stopColor="#05CD99" />
            </linearGradient>
            <circle
              cx={200}
              cy={200}
              r="92.5"
              stroke="transparent"
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
              strokeDashoffset="174.3583922742335"
              strokeLinecap="round"
              stroke="url(#grd_wbczsqe2915b)"
              style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
            />
          </svg>
          <div className="rate">
            <span>Safety</span>
            <h2>9.3</h2>
            <span>Total Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTrackingCard;
