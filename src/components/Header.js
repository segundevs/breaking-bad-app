import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/new-logo.png';

const Header = () => {
  return (
    <>
    <div className="header-logo">
      <img src={logo} alt="Breaking Bad"/>
    </div>
    <Link to='/favorites' className="btn">Favorites</Link>
    </>
  )
}

export default Header
