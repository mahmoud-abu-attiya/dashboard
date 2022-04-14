import React from 'react'
import ChartsContainer from './charts/ChartsContainer'
import Navbar from './Navbar'
import StatisticCard from './StatisticCards/StatisticCard'
import Wsr from './wsr/Wsr'

const Layer = () => {
  return (
    <main className="dashboard">
      <div className="sidebarOverlay"></div>
      <div className="containt">
        <Navbar />
        <StatisticCard />
        <Wsr />
        <ChartsContainer />
      </div>
    </main>
  )
}

export default Layer