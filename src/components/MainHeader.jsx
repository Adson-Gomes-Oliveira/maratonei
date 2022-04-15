import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/svg/logotipo.svg';
import LoginIcon from '../images/svg/login.svg';
import {HeaderStyled, MenuStyled, MenuLoginStyled} from '../styles/index';

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
      <MenuStyled aria-label="main-menu">
        <Link to="/home">INICIO</Link>
        <Link to="/tv-series">TV SERIES</Link>
        <Link to="/films">FILMES</Link>
        <Link to="/streamings">STREAMINGS</Link>
        <Link to="/library">BIBLIOTECA</Link>
        <MenuLoginStyled>
          <Link to="/sign-in">ENTRAR</Link>
          <img src={LoginIcon} alt="Icone de Login" />
        </MenuLoginStyled>
      </MenuStyled>
    </HeaderStyled>
  );
}

export default MainHeader;
