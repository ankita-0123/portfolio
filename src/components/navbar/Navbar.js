import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import './Navbar.scss';

const data = [
  {
    label: 'HOME',
    to: '/'
  },
  {
    label: 'ABOUT',
    to: '/about'
  },
  {
    label: 'RESUME',
    to: '/resume'
  },
  {
    label: 'SKILLS',
    to: '/skills'
  },
  {
    label: 'PROJECT',
    to: '/project'
  },
  {
    label: 'CONTACT',
    to: '/contact'
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setShowPages(false);
  };

  const handlePageClick = () => {
    setShowPages(!showPages);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <h1>Pragyan</h1>
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${
            toggleIcon ? 'active' : ''
          } ${showPages ? 'show-pages' : ''}`}
        >
          {data.map((item, key) => (
            <li
              key={key}
              className="navbar__container__menu__item"
              onClick={handlePageClick}
            >
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
