import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import MediaCards from '../components/MediaCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import SearchArea from '../components/SearchArea';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  MediaStyled,
  MediaSectionStyled,
  MediaContentStyled,
  MediaToShow,
  MediaDisclaimer,
} from '../styles/moviesAndSeries';


function Media() {
  const {pathname} = useLocation();
  const {result, setRequest} = useContext(MaratoneiContext);

  useEffect(() => {
    setRequest(pathname);
  }, [pathname]);

  return (
    <>
      <AlternativeHeader />
      <Advertising />
      <MediaStyled>

        <MediaSectionStyled>

          <MediaContentStyled>

            <SearchArea />

            <MediaToShow>
              <h3>FILMES MAIS POPULARES</h3>
              <MediaCards data={result} />
            </MediaToShow>

            <MediaDisclaimer>
              * Resultados limitados de 20 a 40 por busca,
              para mais resultados utilize a caixa de pesquisa
              ou os filtros disponiveis no site.
            </MediaDisclaimer>

          </MediaContentStyled>

          <GeekArticles />

        </MediaSectionStyled>
      </MediaStyled>
      <Footer />
    </>
  );
}

export default Media;
