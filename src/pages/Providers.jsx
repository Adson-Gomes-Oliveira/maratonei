import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Loading from '../components/general/Loading';
import Advertising from '../components/general/Advertising';
import AlternativeHeader from '../components/general/AlternativeHeader';
import Footer from '../components/general/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import {useProvidersAPI} from '../hooks/useRequestAPI';
import {ProvidersPageStyled, ProviderImages} from '../styles/providers';

function Providers() {
  const {result} = useProvidersAPI();
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
      <AlternativeHeader />
      <Advertising />
      <ProvidersPageStyled>
        <h2>Serviços de Streamings disponíveis</h2>
        <h3>Clique em um dos streamings e confira
          os filmes mais populares</h3>
        <ProviderImages>
          {result.map((provider) => {
            const {
              provider_name: name,
              logo_path: thumbNail,
              provider_id: id,
            } = provider;
            const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

            return (
              <Link key={uuidv4()} to={`/providers/${id}`}>
                <img src={thumb} alt={`${name} logo`} />
              </Link>
            );
          })}
        </ProviderImages>
      </ProvidersPageStyled>
      <Footer />
    </>
  );
}

export default Providers;
