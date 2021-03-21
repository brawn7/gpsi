import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo.png'

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="gapsi_logo" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
      <i className="fas fa-user-alt"></i>
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/">Cerrar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;