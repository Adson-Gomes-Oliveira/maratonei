import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/svg/logotipo.svg';
import LoginIcon from '../images/svg/login.svg';
import {HeaderStyled, MenuStyled, MenuLoginStyled} from '../styles/header';

function MainHeader() {
  return (
    <HeaderStyled>
      <Link to="/"><img src={Logo} alt="Logotipo Maratonei" /></Link>
      <MenuStyled>
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
