import React from 'react'
import './Input.css'

function Input(props) {
  return (
    <div className="form-input">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} name={props.name} />
    </div>
  )
}

export default Input