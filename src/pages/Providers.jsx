import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Advertising from '../components/Advertising';
import AlternativeHeader from '../components/AlternativeHeader';
import {ProvidersPageStyled, ProviderImages} from '../styles/index';
import Footer from '../components/Footer';
import {useProvidersAPI} from '../hooks/useRequestAPI';

function Providers() {
  const {result} = useProvidersAPI();
  return (
    <>
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
