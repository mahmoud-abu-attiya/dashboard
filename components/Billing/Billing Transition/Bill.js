import React from 'react'
import DE from './DE'

const Bill = () => {
  return (
    <div className='bill'>
      <h3>Billing Information</h3>
      <DE
        dename="Oliver Liam"
        cname="Viking Burrito"
        email="oliver@burrito.com"
        vat="FRB1235476"
      />
      <DE
        dename="Lucas Harper"
        cname="Stone Tech Zone"
        email="lucas@stone-tech.com"
        vat="FRB1235476"
      />
      <DE
        dename="Ethan James"
        cname="Fiber Notion"
        email="ethan@fiber.com"
        vat="FRB1235476"
      />
    </div>
  )
}

export default Bill