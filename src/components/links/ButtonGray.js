import React from 'react'
import './ButtonGray.css'
import { Link } from 'react-router-dom'

function ButtonGray(props) {
  return (
    <>
        <Link to={props.to} className='btn-gray'>{props.name}</Link>
    </>
  )
}

export default ButtonGray