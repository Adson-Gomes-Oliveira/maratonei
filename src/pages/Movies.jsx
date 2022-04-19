import React, {useEffect, useContext} from 'react';
import SecondHeader from '../components/SecondHeader';
import {
  ExploreStyled,
  ExploreContentStyled,
  ShowSectionStyled,
  SearchLabel,
  SearchInput,
  SearchButton,
  FilterButton,
  CardsToShow,
} from '../styles/explore';
import Advisor from '../components/Advisor';
import MoviesCards from '../components/MoviesCards';
import MaratoneiContext from '../context/MaratoneiContext';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

function Movies() {
  const {
    popularMovies,
    fetchMoviesByPopularity,
    loading,
    inputSearch,
    handleChangeSearch,
    handleClickSearch,
    handleEnterSearch,
  } = useContext(MaratoneiContext);

  useEffect(() => {
    fetchMoviesByPopularity();
  }, []);

  if (loading) return <Loading />;
  return (
    <ExploreStyled> {/* Generic Component for Explore Sections */}
      <SecondHeader />
      <Advisor />

      {/* Generic Component for the Content of Explore Sections */}
      <ExploreContentStyled>

        <ShowSectionStyled> {/* Generic Component for Content Left */}

          {/* Generic Component for search and filter Area */}
          <SearchLabel htmlFor="search-title">

            <div>
              <SearchInput
                type="text"
                placeholder="PESQUISAR TITULOS"
                data-testid="search-box"
                onChange={handleChangeSearch}
                onKeyDown={handleEnterSearch}
                value={inputSearch}
              />
              <SearchButton
                type="button"
                onClick={handleClickSearch}
              >
                <span className='material-icons-outlined'>search</span>
              </SearchButton>
            </div>

            <FilterButton>
              <span className='material-icons-outlined'>filter_list</span>
            </FilterButton>

          </SearchLabel>

          <CardsToShow> {/* Generic Component for Cards Section */}
            <h3>FILMES MAIS POPULARES</h3>
            <MoviesCards data={popularMovies} />
          </CardsToShow>

        </ShowSectionStyled>

        {/* <GeekNotices /> */}

      </ExploreContentStyled>
      <Footer />
    </ExploreStyled>
  );
}

export default Movies;
