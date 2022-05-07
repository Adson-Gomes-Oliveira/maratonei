import React from 'react';
import Header from '../components/Header';
import ProviderServices from '../components/ProviderServices';
import {HomepageStyled, HeroBrandingStyled} from '../styles/homepage';

function Homepage() {
  return (
    <HomepageStyled>
      <Header />

      <HeroBrandingStyled>
        <span>SUA WIKI DE FILMES E SERIES</span>
        <span>SAIBA ONDE ASSISTIR | SALVE SEUS FAVORITOS E MUITO MAIS...</span>
      </HeroBrandingStyled>

      <ProviderServices />
    </HomepageStyled>
  );
}

export default Homepage;
