import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import MediaCards from '../components/MediaCards';
import GeekArticles from '../components/GeekArticles';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
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
  const {id} = useParams();
  const {setProviderId, providerResult} = useProvidersAPI();
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

  useEffect(() => {
    setProviderId(id);
  }, []);

  return (
    <>
      {loading && <Loading />}
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
