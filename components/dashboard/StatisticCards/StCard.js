import React from 'react'

const stCard = (props) => {
  return (
    <div className="st-card">
      <div className="st-card-info">
        <p className="title">{props.title}</p>
        <div className="valu">{props.valu}</div>
        <span className="percent">{props.percent}%</span>
      </div>
      <div className="st-card-icon">
        {props.icon}
      </div>
    </div>
)
}

export default stCard