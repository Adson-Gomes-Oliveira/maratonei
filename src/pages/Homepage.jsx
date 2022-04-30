import React from 'react';
import MainHeader from '../components/MainHeader';
import ProviderServices from '../components/ProviderServices';
import {HomepageStyled, HeroBrandingStyled,
  HomepageButtonsStyled} from '../styles/homepage';

function Homepage() {
  // PARA IMPLEMENTAR:

  // const navigate = useNavigate();

  // const randomNumber = (min, max) => {
  //   return Math.round(Math.random() * (max - min) + min);
  // };

  // const randomMovie = () => {
  //   const randomId = randomNumber(0, 37500);
  //   navigate(`/movies/${randomId}`);
  // };

  // const randomSerie = () => {
  //   const randomId = randomNumber(0, 20000);
  //   navigate(`/series/${randomId}`);
  // };

  return (
    <HomepageStyled>
      <MainHeader />

      <HeroBrandingStyled>
        <span>SUA WIKI DE FILMES E SERIES</span>
        <span>SAIBA ONDE ASSISTIR | SALVE SEUS FAVORITOS E MUITO MAIS...</span>
      </HeroBrandingStyled>

      <ProviderServices />

      <HomepageButtonsStyled>
        <button
          type="button"
          data-testid="find-searching"
        >
          ME RECOMENDA UM FILME AI!
        </button>
        <button
          type="button"
          data-testid="find-random"
        >
          ME RECOMENDA UMA SERIE AI!
        </button>
      </HomepageButtonsStyled>
    </HomepageStyled>
  );
}

export default Homepage;
