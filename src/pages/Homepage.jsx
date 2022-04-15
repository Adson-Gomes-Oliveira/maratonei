import React from 'react';
import MainHeader from '../components/MainHeader';
import {HomepageStyled, HeroBrandingStyled} from '../styles/homepage';

function Homepage() {
  return (
    <HomepageStyled>
      <MainHeader />
      <HeroBrandingStyled>
        <span>SUA WIKI DE FILMES E SERIES</span>
        <span>SAIBA ONDE ASSISTIR | SALVE SEUS FAVORITOS E MUITO MAIS...</span>
      </HeroBrandingStyled>
      {/* <StreamingsServicesStyled>

      </StreamingsServicesStyled>
      <HomepageButtonsStyled>

      </HomepageButtonsStyled> */}
    </HomepageStyled>
  );
}

export default Homepage;
