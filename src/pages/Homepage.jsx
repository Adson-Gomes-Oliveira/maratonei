import React, {useEffect, useContext} from 'react';
import Header from '../components/general/Header';
import Loading from '../components/general/Loading';
import ProviderServices from '../components/streaming/ProviderServices';
import {HomepageStyled, HeroBrandingStyled} from '../styles/homepage';
import MaratoneiContext from '../context/MaratoneiContext';

function Homepage() {
  const {loading, setLoading} = useContext(MaratoneiContext);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <HomepageStyled>
        <Header />

        <HeroBrandingStyled>
          <span>SUA WIKI DE FILMES E SERIES</span>
          <span>
            SAIBA ONDE ASSISTIR |
            SALVE SEUS FAVORITOS E MUITO MAIS...
          </span>
        </HeroBrandingStyled>

        <ProviderServices />
      </HomepageStyled>
    </>
  );
}

export default Homepage;
