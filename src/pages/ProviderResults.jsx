import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import MediaCards from '../components/MediaCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import {useProvidersAPI} from '../hooks/useRequestAPI';
import {
  MediaStyled,
  MediaSectionStyled,
  MediaContentStyled,
  MediaToShow,
  MediaDisclaimer,
} from '../styles/media';
import '../styles/cssAnimations.css';

function ProviderResults() {
  console.log('render');
  const {id} = useParams();
  const {setProviderId, providerResult} = useProvidersAPI();

  useEffect(() => {
    setProviderId(id);
  }, []);

  return (
    <>
      <AlternativeHeader />
      <Advertising />
      <MediaStyled>

        <MediaSectionStyled>

          <MediaContentStyled>

            <MediaToShow>
              <h3>FILMES MAIS POPULARES DO STREAMING</h3>
              <MediaCards data={providerResult} />
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

export default ProviderResults;
