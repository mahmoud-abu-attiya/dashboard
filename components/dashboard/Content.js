import React from 'react'
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
      </div>
    </main>
  )
}

export default Layer