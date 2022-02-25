import React from 'react'
import './InputSubmit.css'

function InputSubmit(props) {
  return (
    <>
        <button style={{width: props.width}} className="input-submit" type="submit">{props.name}</button>
    </>
  )
}

export default InputSubmit