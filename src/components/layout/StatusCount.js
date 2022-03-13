import React from 'react'
import './StatusCount.css'

function StatusCount(props) {
  return (
    <div className="block-vertical space-component">
        <h4 className="name-status">
            {props.name}
        </h4>
        <p className="count-status">
            {props.value}
        </p>
    </div>
  )
}

export default StatusCount