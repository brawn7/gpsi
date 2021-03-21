import React from 'react';
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo.png'

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="gapsi_logo" />
    <div className="header__menu">
      <div className="header__menu--profile">
      <i class="fas fa-user-alt"></i>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;