import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

function HeaderLogo() {
  return (
    <div className="  block__logo">
        <Link to="" title="index">
            <img src={logo} id="logo" alt="logo"/> 
        </Link>
    </div>
  )
}

export default HeaderLogo