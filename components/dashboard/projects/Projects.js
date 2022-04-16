import React from "react";
import Table from "./Table";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DragIndicatorRoundedIcon from "@material-ui/icons/DragIndicatorRounded";

const Projects = () => {
  return (
    <div className="projects">
      <div className="head">
        <div>
          <h2>Projects</h2>
          <span className="done">
            <span className="green">
              <CheckCircleRoundedIcon style={{ fontSize: 15 }} />
            </span>
            <span className="gray"> 30 done this month</span>
          </span>
        </div>
        <button className="three-btn">
          <DragIndicatorRoundedIcon />
        </button>
      </div>
      <Table />
    </div>
  );
};

export default Projects;
