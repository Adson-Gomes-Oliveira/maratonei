import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/svg/logotipo.svg';
import {HeaderStyled} from '../styles/index';
import MenuBar from './MenuBar';

function MainHeader() {
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

export default MainHeader;
