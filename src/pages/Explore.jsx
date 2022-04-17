import React, {useEffect, useContext} from 'react';
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
import MoviesCards from '../components/MoviesCards';
import MaratoneiContext from '../context/MaratoneiContext';

function Explore() {
  const {popularMovies, fetchMoviesByPopularity} = useContext(MaratoneiContext);

  useEffect(() => {
    fetchMoviesByPopularity();
  }, []);

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
            <MoviesCards data={popularMovies} />
          </FilmsToShow>
        </ShowSectionStyled>

        {/* <GeekNotices /> */}

      </ExploreContentStyled>
    </ExploreStyled>
  );
}

export default Explore;
