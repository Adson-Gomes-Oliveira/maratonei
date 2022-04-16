import React from 'react';
import SecondHeader from '../components/SecondHeader';
import {ExploreStyled} from '../styles/explore';
import Advisor from '../components/Advisor';

function Explore() {
  return (
    <ExploreStyled>
      <SecondHeader />
      <Advisor />
    </ExploreStyled>
  );
}

export default Explore;
