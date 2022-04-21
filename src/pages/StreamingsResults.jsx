import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
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
import '../styles/cssAnimations.css';

function StreamingsResults() {
  const {id} = useParams();
  const {
    fetchByProvider,
    loading,
    moviesAndSeriesData,
    setLoading,
  } = useContext(MaratoneiContext);

  useEffect(() => {
    fetchByProvider(id);
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
      <MoviesAndSeriesStyled>
        {loading && <Loading />}
        <SectionStyled>

          <ContentStyled>
            <CardsToShow>
              <h3>FILMES MAIS POPULARES DO STREAMING</h3>
              <MoviesCards data={moviesAndSeriesData} />
            </CardsToShow>
            <DisclaimerResults>
              * Resultados limitados de 20 a 40 por busca, para mais resultados
              utilize a caixa de pesquisa ou os filtros disponiveis no site.
            </DisclaimerResults>
          </ContentStyled>

          <GeekArticles />

        </SectionStyled>
      </MoviesAndSeriesStyled>
      <Footer />
    </>
  );
}

export default StreamingsResults;
