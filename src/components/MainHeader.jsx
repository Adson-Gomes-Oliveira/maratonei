import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/svg/logotipo.svg';
import LoginIcon from '../images/svg/login.svg';
import {HeaderStyled, MenuStyled, MenuLoginStyled} from '../styles/header';

function MainHeader() {
  return (
    <HeaderStyled>
      <img src={Logo} alt="Logotipo Maratonei" />
      <MenuStyled>
        <Link to=""><span>INICIO</span></Link>
        <Link to=""><span>TV SERIES</span></Link>
        <Link to=""><span>FILMES</span></Link>
        <Link to=""><span>STREAMINGS</span></Link>
        <Link to=""><span>BIBLIOTECA</span></Link>
        <MenuLoginStyled>
          <Link to=""><span>ENTRAR</span></Link>
          <img src={LoginIcon} alt="Icone de Login" />
        </MenuLoginStyled>
      </MenuStyled>
    </HeaderStyled>
  );
}

export default MainHeader;
