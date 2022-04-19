import React from 'react';
import {Link} from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import StreamingServices from '../components/StreamingServices';
import {HomepageStyled, HeroBrandingStyled,
  HomepageButtonsStyled} from '../styles/homepage';

function Homepage() {
  return (
    <HomepageStyled>
      <MainHeader />

      <HeroBrandingStyled>
        <span>SUA WIKI DE FILMES E SERIES</span>
        <span>SAIBA ONDE ASSISTIR | SALVE SEUS FAVORITOS E MUITO MAIS...</span>
      </HeroBrandingStyled>

      <StreamingServices />

      <HomepageButtonsStyled>
        <Link to="/surprise-me/movie">
          <button
            type="button"
            data-testid="find-searching"
          >
            ME RECOMENDA UM FILME AI!
          </button>
        </Link>
        <Link to="/surprise-me/serie">
          <button
            type="button"
            data-testid="find-random"
          >
            ME RECOMENDA UMA SERIE AI!
          </button>
        </Link>
      </HomepageButtonsStyled>
    </HomepageStyled>
  );
}

export default Homepage;
