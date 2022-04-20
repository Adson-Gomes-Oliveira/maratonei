import React from 'react';
import {LoadingStyled} from '../styles/index';
import Logo from '../images/svg/logotipo.svg';

function Loading() {
  return (
    <LoadingStyled>
      <img src={Logo} alt="Maratonei Logo" />
    </LoadingStyled>
  );
}

export default Loading;
