import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import MoviesCards from '../components/MoviesCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import {useProvidersAPI} from '../hooks/useRequestAPI';
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
  const {setProviderId, providerResult} = useProvidersAPI();

  useEffect(() => {
    setProviderId(id);
  }, []);

  return (
    <>
      <AlternativeHeader />
      <Advertising />
      <MoviesAndSeriesStyled>

        <SectionStyled>

          <ContentStyled>

            <CardsToShow>
              <h3>FILMES MAIS POPULARES DO STREAMING</h3>
              <MoviesCards data={providerResult} />
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
  );
}

export default StreamingsResults;
