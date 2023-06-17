import React from 'react';
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import {FaBars, FaReact} from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.scss';


const data = [
    {
        label:'HOME',
        to:'/'
    },
    {
        label:'ABOUT',
        to:'/about'
    },
    {
        label:'RESUME',
        to:'/resume'
    },
    {
        label:'SKILLS',
        to:'/skills'
    },
    {
        label:'PROJECT',
        to:'/project'
    },
    {
        label:'CONTACT',
        to:'/contact'
    },
];

const Navbar = () => {
    const [toggleIcon, setToggle] = useState(false);

    const handleToggleIcon = () =>{
        setToggle(!toggleIcon)
    }
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar__container'>
                <Link to={"/"} className='navbar__container__logo'>
                    <FaReact size={30}/>
                </Link>
            </div>
            <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}>
                {data.map((item,key)=>(
                        <li key={key} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__links' to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
            </ul>
            <div className='nav-icon' onClick={handleToggleIcon}>
                {toggleIcon ? <HiX size={30}/>:<FaBars size={30}/>}
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar;
