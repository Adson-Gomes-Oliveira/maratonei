import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
  MenuStyled,
  MenuLoginStyled,
} from '../styles/menu';

function MenuBar() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const recoverUserDB = JSON.parse(localStorage.getItem('user-register'));
    if (recoverUserDB) setLogged(true);
  }, []);

  return (
    <MenuStyled aria-label="main-menu">
      <Link to="/">INICIO</Link>
      <Link to="/movies">FILMES</Link>
      <Link to="/series">SERIES</Link>
      <Link to="/providers">STREAMINGS</Link>
      <MenuLoginStyled>
        {logged ? (
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
