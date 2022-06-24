import React from 'react';
import {Link} from 'react-router-dom';
import MenuStyled from '../styles/menu';

function MenuBar() {
  return (
    <MenuStyled aria-label="main-menu">
      <Link to="/">INICIO</Link>
      <Link to="/movies">FILMES</Link>
      <Link to="/series">SERIES</Link>
      <Link to="/providers">STREAMINGS</Link>
    </MenuStyled>
  );
}

export default MenuBar;
