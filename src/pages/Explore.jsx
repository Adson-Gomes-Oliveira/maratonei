import React from 'react';
import SecondHeader from '../components/SecondHeader';
import {
  ExploreStyled,
  ExploreContentStyled,
  ShowSectionStyled,
  SearchLabel,
  SearchInput,
  SearchButton,
  FilmsToShow,
} from '../styles/explore';
import Advisor from '../components/Advisor';

function Explore() {
  return (
    <ExploreStyled>
      <SecondHeader />
      <Advisor />

      <ExploreContentStyled>

        <ShowSectionStyled>
          <SearchLabel htmlFor="search-title">
            <div>
              <SearchInput
                type="text"
                placeholder="PESQUISAR TITULOS"
                data-testid="search-box"
              />
              <SearchButton type="button">
                <span className='material-icons-outlined'>search</span>
              </SearchButton>
            </div>
          </SearchLabel>

          <FilmsToShow>
            <h3>FILMES E SERIES EM ALTA</h3>
          </FilmsToShow>
        </ShowSectionStyled>

        {/* <GeekNotices /> */}

      </ExploreContentStyled>
    </ExploreStyled>
  );
}

export default Explore;
