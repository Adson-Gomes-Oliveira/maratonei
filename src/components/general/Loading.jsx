import React from 'react';
import Logo from '../../images/svg/logotipo.svg';
import {LoadingStyled} from '../../styles/index';

function Loading() {
  return (
    <LoadingStyled>
      <img src={Logo} alt="Maratonei Logo" />
    </LoadingStyled>
  );
}

export default Loading;
