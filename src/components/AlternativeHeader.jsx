import React from 'react';
import {Link} from 'react-router-dom';
import MenuBar from './MenuBar';
import {AlternativeHeaderStyled} from '../styles';
import Logo from '../images/svg/logotipo.svg';

function AlternativeHeader() {
  return (
    <AlternativeHeaderStyled>
      <Link to="/">
        <img
          src={Logo}
          alt="Logotipo Maratonei"
          data-testid="maratonei-logo-svg"
        />
      </Link>
      <MenuBar />
    </AlternativeHeaderStyled>
  );
}

export default AlternativeHeader;
