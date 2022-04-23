import React, {useEffect, useContext} from 'react';
import AlternativeHeader from '../components/AlternativeHeader';
import Advisor from '../components/Advisor';
import Loading from '../components/Loading';
import MoviesCards from '../components/MoviesCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  MoviesAndSeriesStyled,
  SectionStyled,
  ContentStyled,
  CardsToShow,
  DisclaimerResults,
} from '../styles/moviesAndSeries';
import SearchArea from '../components/SearchArea';

function Series() {
  const {
    fetchSeries,
    loading,
    moviesAndSeriesData,
    setLoading,
  } = useContext(MaratoneiContext);

  useEffect(() => {
    fetchSeries();
    setLoading(true);
    const showLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(showLoading);
    };
  }, []);

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
                  <h3>SERIES MAIS POPULARES</h3>
                  <MoviesCards data={moviesAndSeriesData} />
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

export default Series;
