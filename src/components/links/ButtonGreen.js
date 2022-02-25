import React from 'react'
import './ButtonGreen.css'
import { Link } from 'react-router-dom'

function ButtonGreen(props) {
  return (
    <>
        <Link to={props.to} className='btn-green'>{props.name}</Link>
    </>
  )
}

export default ButtonGreen