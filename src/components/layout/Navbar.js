import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGreen from '../links/ButtonGreen';
import ItemNavbar from '../links/ItemNavbar';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img id='logo' src="/images/logo.png" alt="logo" />
                        <h2>Organize Books</h2>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'navbar-links active' : 'navbar-links'}>
                        <li>
                            <ItemNavbar to="/login" name='Login' />
                        </li>
                        <li>
                            <ButtonGreen to="/register" name="SingUp" />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar