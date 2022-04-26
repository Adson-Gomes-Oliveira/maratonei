import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import AlternativeHeader from '../components/AlternativeHeader';
import Advisor from '../components/Advisor';
import Loading from '../components/Loading';
import MoviesCards from '../components/MoviesCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import useRequestTMDb from '../hooks/useRequestTMDb';
import SearchArea from '../components/SearchArea';
import {
  MoviesAndSeriesStyled,
  SectionStyled,
  ContentStyled,
  CardsToShow,
  DisclaimerResults,
} from '../styles/moviesAndSeries';

function Shows() {
  const {pathname} = useLocation();
  const [result, setRequest] = useRequestTMDb();
  const {loading, setLoading} = useContext(MaratoneiContext);

  useEffect(() => {
    setRequest(pathname);
    setLoading(true);
    const showLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(showLoading);
    };
  }, [pathname]);

  return (
    <>
      <AlternativeHeader />
      <Advisor />
      {loading ? <Loading /> : (
        <>
          <MoviesAndSeriesStyled>

            <SectionStyled>

              <ContentStyled>

                <SearchArea />

                <CardsToShow>
                  <h3>FILMES MAIS POPULARES</h3>
                  <MoviesCards data={result} />
                </CardsToShow>

                <DisclaimerResults>
                  * Resultados limitados de 20 a 40 por busca,
                  para mais resultados utilize a caixa de pesquisa
                  ou os filtros disponiveis no site.
                </DisclaimerResults>

              </ContentStyled>

              <GeekArticles />

            </SectionStyled>
          </MoviesAndSeriesStyled>
          <Footer />
        </>
      )}
    </>
  );
}

export default Shows;
