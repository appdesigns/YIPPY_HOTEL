import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as AiIcons  from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { MdHotelClass } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import '../scss/Navbar.scss'
import { MenuData } from './MenuItems';
import {IconContext} from 'react-icons'

function Navbar() {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const toggleMenuIcon = () => setToggle(!toggle)
    
    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3 text-black fw-bold" to="/">YIPPY HOTEL <MdHotelClass className="hotel-logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><AiIcons.AiOutlineAlignCenter className="text-black" style={{ fontSize: '30px'}} /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <div className="navbar_ mx-auto">
                            <div className="menu_bars">
                                <Link>
                                    <AiIcons.AiOutlineAlignCenter onClick={toggleMenuIcon} className="text-black me-2"/>
                                </Link>
                            </div>
                            <div className={toggle ? 'nav_menu active':'nav_menu'}>
                                <ul className="nav_menu_items" onClick={toggleMenuIcon}>
                                    <li className="navbar_toggle">
                                    <Link to="#" className='menu_bars'>
                                        <TfiClose/>
                                    </Link>
                                    </li>
                                    {MenuData.map((item, index)=>{
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/signin">SIGN IN</Link>
                            </li>
                        </ul>
                            <button className="mx-3 booknow-btn fw-bold" type="submit">BOOK NOW</button>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3 text-black" to="/">YIPPY HOTEL <MdHotelClass className="hotel-logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><AiOutlineAlignCenter/></span>
                    </button>

                        <Link href="/"><AiOutlineAlignCenter className="menu-icon AiOutlineAlignCenter text-black me-2" onClick={handleClick} /></Link>

                </div>

            </nav> */}
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
