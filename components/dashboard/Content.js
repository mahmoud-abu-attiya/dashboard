import React from "react";
import ChartsContainer from "./charts/ChartsContainer";
// import Navbar from '../Navbar'
import Prover from "./projects/Prover";
import StatisticCard from "./StatisticCards/StatisticCard";
import Wsr from "./wsr/Wsr";
// import Layout from "../layouts/Layout";

const Dashboard = () => {
  return (
    <>
      <StatisticCard />
      <Wsr />
      <ChartsContainer />
      <Prover />
    </>
  );
};

export default Dashboard;
