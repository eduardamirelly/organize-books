import React from 'react'
import { Link } from 'react-router-dom'
import './LogoLink.css'

function LogoLink() {
  return (
    <>
        <Link to="/" className="logo">
            <img src="/images/logo.png" alt="logo" />
            <h2>Organize Books</h2>
        </Link>
    </>
  )
}

export default LogoLink