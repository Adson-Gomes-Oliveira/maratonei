import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Advisor from '../components/Advisor';
import AlternativeHeader from '../components/AlternativeHeader';
import MaratoneiContext from '../context/MaratoneiContext';
import {StreamingsPageStyled, StreamingImages} from '../styles/index';
import Footer from '../components/Footer';

function Streamings() {
  const {providersData} = useContext(MaratoneiContext);
  return (
    <>
      <AlternativeHeader />
      <Advisor />
      <StreamingsPageStyled>
        <h2>Serviços de Streamings disponíveis</h2>
        <h3>Clique em um dos streamings e confira
          os filmes mais populares</h3>
        <StreamingImages>
          {providersData.map((provider) => {
            const {
              provider_name: name,
              logo_path: thumbNail,
              provider_id: id,
            } = provider;
            const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

            return (
              <Link key={uuidv4()} to={`/streamings/${id}`}>
                <img src={thumb} alt={`${name} logo`} />
              </Link>
            );
          })}
        </StreamingImages>
      </StreamingsPageStyled>
      <Footer />
    </>
  );
}

export default Streamings;
