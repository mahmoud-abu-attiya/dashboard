import React from 'react'
import InDetails from './InDetails'

const Invoices = () => {
  return (
    <div className="invoices">
      <div className="head">
        <h4>Invoices</h4>
        <button>VIWE ALL</button>
      </div>
      <InDetails 
        date="March, 01, 2020"
        span="#MS-415646"
        price="180"
      />
      <InDetails 
        date="February, 10, 2021"
        span="#RV-126749"
        price="250"
      />
      <InDetails 
        date="April, 05, 2020"
        span="#QW-103578"
        price="120"
      />
      <InDetails 
        date="June, 25, 2019"
        span="#MS-415646"
        price="180"
      />
      <InDetails 
        date="March, 01, 2019"
        span="#AR-803481"
        price="300"
      />
    </div>
  )
}

export default Invoices