import React from 'react'
import ChartsContainer from './charts/ChartsContainer'
// import Splinechart from './charts/SplineChart'
// import Link from 'next/dist/client/link'
import StatisticCard from './StatisticCards/StatisticCard'
import Wsr from './wsr/Wsr'

const Layer = () => {
  return (
    <main className="dashboard">
      <div className="sidebarOverlay"></div>
      <div className="containt">
        <StatisticCard />
        <Wsr />
        <ChartsContainer />
      </div>
    </main>
  )
}

export default Layer