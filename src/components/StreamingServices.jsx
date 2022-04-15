import React from 'react';
import Netflix from '../images/netflix-logo.png';
import Prime from '../images/prime-logo.png';
import Disney from '../images/disney-logo.jpg';
import HBO from '../images/hbo-logo.jpg';
import Telecine from '../images/telecine-logo.jpg';
import Looke from '../images/looke-logo.jpg';
import Star from '../images/star-logo.png';
import Crunch from '../images/crunch-logo.png';
import Hulu from '../images/hulu-logo.webp';
import Vudu from '../images/vudu-logo.png';
import {StreamingsStyled} from '../styles/index';

function StreamingServices() {
  return (
    <StreamingsStyled>
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
    </StreamingsStyled>
  );
}

export default StreamingServices;
