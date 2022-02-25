import React from 'react'
import './ButtonBlue.css'
import { Link } from 'react-router-dom'

function ButtonBlue(props) {
  return (
    <>
        <Link 
          style={{width: props.width}} 
          to={props.to} 
          className='btn-blue'>
          {props.name}
        </Link>
    </>
  )
}

export default ButtonBlue