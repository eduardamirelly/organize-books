import React, { useState } from 'react';
import ButtonGreen from '../links/ButtonGreen';
import ItemNavbar from '../links/ItemNavbar';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import LogoLink from './LogoLink';

function Navbar({menu_btnBg, menu_links}) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <LogoLink />
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'navbar-links active' : 'navbar-links'}>
                        {
                            menu_links.map(function(obj, index){
                                return <li><ItemNavbar to={menu_links[index].to} name={menu_links[index].name} /></li>;
                            })
                        }
                        <li>
                            <ButtonGreen to={menu_btnBg.to} name={menu_btnBg.name} />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar