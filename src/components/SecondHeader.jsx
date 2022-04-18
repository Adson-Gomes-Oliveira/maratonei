import React from 'react';
import {Link} from 'react-router-dom';
import MenuBar from './MenuBar';
import {SecondHeaderStyled} from '../styles';
import Logo from '../images/svg/logotipo.svg';

function SecondHeader() {
  return (
    <SecondHeaderStyled>
      <Link to="/">
        <img
          src={Logo}
          alt="Logotipo Maratonei"
          data-testid="maratonei-logo-svg"
        />
      </Link>
      <MenuBar />
    </SecondHeaderStyled>
  );
}a

export default SecondHeader;
