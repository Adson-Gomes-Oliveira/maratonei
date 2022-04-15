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
        <Link to="">INICIO</Link>
        <Link to="">TV SERIES</Link>
        <Link to="">FILMES</Link>
        <Link to="">STREAMINGS</Link>
        <Link to="">BIBLIOTECA</Link>
        <MenuLoginStyled>
          <Link to="">ENTRAR</Link>
          <img src={LoginIcon} alt="Icone de Login" />
        </MenuLoginStyled>
      </MenuStyled>
    </HeaderStyled>
  );
}

export default MainHeader;
