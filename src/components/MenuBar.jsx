import React from 'react';
import {Link} from 'react-router-dom';
import {MenuStyled, MenuLoginStyled} from '../styles/index';

function MenuBar() {
  return (
    <MenuStyled aria-label="main-menu">
      <Link to="/">INICIO</Link>
      <Link to="/movies">FILMES</Link>
      <Link to="/series">SERIES</Link>
      <Link to="/streamings">STREAMINGS</Link>
      <Link to="/library">BIBLIOTECA</Link>
      <MenuLoginStyled>
        <Link to="/sign-in">
          <span>ENTRAR</span>
          <span className="material-icons-outlined">login</span>
        </Link>
      </MenuLoginStyled>
    </MenuStyled>
  );
}

export default MenuBar;
