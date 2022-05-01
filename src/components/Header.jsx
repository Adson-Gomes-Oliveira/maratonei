import React from 'react';
import {Link} from 'react-router-dom';
import MenuBar from './MenuBar';
import Logo from '../images/svg/logotipo.svg';
import {HeaderStyled} from '../styles/headers';

function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <img
          src={Logo}
          alt="Logotipo Maratonei"
          data-testid="maratonei-logo-svg"
        />
      </Link>
      <MenuBar />
    </HeaderStyled>
  );
}

export default Header;
