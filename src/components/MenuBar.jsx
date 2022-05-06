import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  MenuStyled,
  MenuLoginStyled,
} from '../styles/menu';

function MenuBar() {
  const {profile} = useContext(MaratoneiContext);

  return (
    <MenuStyled aria-label="main-menu">
      <Link to="/">INICIO</Link>
      <Link to="/movies">FILMES</Link>
      <Link to="/series">SERIES</Link>
      <Link to="/providers">STREAMINGS</Link>
      <MenuLoginStyled>
        {Object.keys(profile).length > 0 ? (
          <Link to='/profile'>
            <span>PERFIL</span>
            <span className="material-icons-outlined">login</span>
          </Link>
        ) : (
          <Link to='/enter'>
            <span>ENTRAR</span>
            <span className="material-icons-outlined">login</span>
          </Link>
        )}
      </MenuLoginStyled>
    </MenuStyled>
  );
}

export default MenuBar;
