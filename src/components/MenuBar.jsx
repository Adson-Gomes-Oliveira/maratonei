import React from 'react';
import {Link} from 'react-router-dom';
import LoginIcon from '../images/svg/login.svg';
import {MenuStyled, MenuLoginStyled} from '../styles/index';

function MenuBar() {
  return (
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
  );
}

export default MenuBar;
