import React from 'react'
import './ItemNavbar.css'
import { Link } from 'react-router-dom'

function ItemNavbar(props) {
  return (
    <>
      <Link to='/' className='item-navbar'>{props.name}</Link>
    </>
  )
}

export default ItemNavbar