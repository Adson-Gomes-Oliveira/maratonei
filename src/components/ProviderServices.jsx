import React from 'react';
import Netflix from '../images/netflix-logo.webp';
import Prime from '../images/prime-logo.webp';
import Disney from '../images/disney-logo.webp';
import HBO from '../images/hbo-logo.webp';
import Telecine from '../images/telecine-logo.webp';
import Looke from '../images/looke-logo.webp';
import Star from '../images/star-logo.webp';
import Crunch from '../images/crunch-logo.webp';
import Hulu from '../images/hulu-logo.webp';
import Vudu from '../images/vudu-logo.webp';
import {ProvidersStyled} from '../styles/index';

function ProviderServices() {
  return (
    <ProvidersStyled>
      <img src={Netflix} alt="Netflix Logo" data-testid="streaming-logo"/>
      <img src={Prime} alt="Prime Logo" data-testid="streaming-logo"/>
      <img src={Disney} alt="Disney Logo" data-testid="streaming-logo"/>
      <img src={HBO} alt="HBO Logo" data-testid="streaming-logo"/>
      <img src={Telecine} alt="Telecine Logo" data-testid="streaming-logo"/>
      <img src={Looke} alt="Looke Logo" data-testid="streaming-logo"/>
      <img src={Star} alt="Star Logo" data-testid="streaming-logo"/>
      <img src={Crunch} alt="Crunch Logo" data-testid="streaming-logo"/>
      <img src={Hulu} alt="Hulu Logo" data-testid="streaming-logo"/>
      <img src={Vudu} alt="Vudu Logo" data-testid="streaming-logo"/>
    </ProvidersStyled>
  );
}

export default ProviderServices;
