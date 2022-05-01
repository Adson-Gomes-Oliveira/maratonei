import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
  MenuStyled,
  MenuLoginStyled,
} from '../styles/menu';

function MenuBar() {
  const [ProfileEnter, setProfileEnter] = useState(false);

  useEffect(() => {
    const userExists = JSON.parse(localStorage.getItem('user-register'));
    if (userExists !== null) {
      if (userExists.username !== '') {
        setProfileEnter(true);
      }
    };
  }, []);

  return (
    <MenuStyled aria-label="main-menu">
      <Link to="/">INICIO</Link>
      <Link to="/movies">FILMES</Link>
      <Link to="/series">SERIES</Link>
      <Link to="/providers">STREAMINGS</Link>
      <Link to="/library">BIBLIOTECA</Link>
      <MenuLoginStyled>
        <Link to={ProfileEnter ? '/profile' : '/sign-in'}>
          <span>{ProfileEnter ? 'ACESSAR PERFIL' : 'ENTRAR'}</span>
          <span className="material-icons-outlined">login</span>
        </Link>
      </MenuLoginStyled>
    </MenuStyled>
  );
}

export default MenuBar;
