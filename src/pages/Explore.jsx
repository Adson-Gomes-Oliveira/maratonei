import React from 'react';
import SecondHeader from '../components/SecondHeader';
import {
  ExploreStyled,
  ExploreContentStyled,
  ShowSectionStyled,
  SearchLabel,
  SearchInput,
  SearchButton,
} from '../styles/explore';
import Advisor from '../components/Advisor';
import SearchIcon from '../images/svg/search.svg';

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
                data-testId="search-box"
              />
              <SearchButton type="button">
                <img src={SearchIcon} alt="" />
              </SearchButton>
            </div>
          </SearchLabel>
        </ShowSectionStyled>

        {/* <GeekNotices /> */}

      </ExploreContentStyled>

    </ExploreStyled>
  );
}

export default Explore;
