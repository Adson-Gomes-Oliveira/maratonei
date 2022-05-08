import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import useRequestAPI from '../hooks/useRequestAPI';
import Loading from '../components/Loading';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import SearchArea from '../components/SearchArea';
import MediaCards from '../components/MediaCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  MediaStyled,
  MediaSectionStyled,
  MediaContentStyled,
  MediaToShow,
  MediaDisclaimer,
} from '../styles/media';

function Media() {
  const {pathname} = useLocation();
  const {result, setRequest, setResult} = useRequestAPI();
  const {loading, setLoading} = useContext(MaratoneiContext);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [pathname]);

  useEffect(() => {
    setRequest(pathname);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      <AlternativeHeader />
      <Advertising />
      <MediaStyled>

        <MediaSectionStyled>

          <MediaContentStyled>

            <SearchArea stateUpdate={setResult} />

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
