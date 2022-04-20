import React, {useState, useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import Loading from '../components/Loading';
import AlternativeHeader from '../components/AlternativeHeader';
import Advisor from '../components/Advisor';
import MoviesCards from '../components/MoviesCards';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  MoviesAndSeriesStyled,
  SectionStyled,
  ContentStyled,
  SearchLabel,
  SearchInput,
  SearchButton,
  FilterButton,
  FilterStyled,
  CardsToShow,
} from '../styles/moviesAndSeries';
import '../styles/cssAnimations.css';

function Movies() {
  const [toggleFilter, setToggleFilter] = useState('hiddenFilter');
  const [rotateWhenClick, setRotate] = useState('stand-by');
  const {pathname} = useLocation();
  const {
    fetchMovies,
    loading,
    moviesAndSeriesData,
    handleChangeSearch,
    handleEnterSearch,
    handleClickSearch,
    filter,
    removeFilters,
  } = useContext(MaratoneiContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleToggle = () => {
    if (rotateWhenClick === 'stand-by') setRotate('filterActivated');
    if (rotateWhenClick === 'filterActivated') setRotate('filterDeactivated');
    if (rotateWhenClick === 'filterDeactivated') setRotate('filterActivated');
    if (toggleFilter === 'hiddenFilter') return setToggleFilter('showFilter');
    return setToggleFilter('hiddenFilter');
  };

  return (
    <MoviesAndSeriesStyled>
      {loading && <Loading />}
      <AlternativeHeader />
      <Advisor />

      <SectionStyled>
        <ContentStyled>

          <SearchLabel htmlFor="search-title">
            <div>
              <SearchInput
                type="text"
                name="inputSearchFilter"
                placeholder="PESQUISAR TITULOS"
                data-testid="search-box"
                onChange={handleChangeSearch}
                onKeyDown={(event) => handleEnterSearch(event, pathname)}
                value={filter.inputSearchFilter}
              />
              <SearchButton
                type="button"
                onClick={() => handleClickSearch(pathname)}
              >
                <span className="material-icons-outlined">search</span>
              </SearchButton>
            </div>

            <FilterButton type="button" onClick={handleToggle}>
              <span>Filtrar por:</span>
              <span
                className={`material-icons-outlined ${rotateWhenClick}`}
              >filter_list</span>
            </FilterButton>
            <FilterStyled className={toggleFilter}>
              <label htmlFor="date-filter">
                <span>Ano de lançamento</span>
                <input
                  name="yearSearchFilter"
                  id="date-filter"
                  type="text"
                  onChange={handleChangeSearch}
                  onKeyDown={(event) => handleEnterSearch(event, pathname)}
                  value={filter.yearSearchFilter}
                />
              </label>
              <button
                type="button"
                onClick={() => removeFilters(pathname)}
              >X</button>
            </FilterStyled>
          </SearchLabel>

          <CardsToShow>
            <h3>FILMES MAIS POPULARES</h3>
            <MoviesCards data={moviesAndSeriesData} />
          </CardsToShow>

        </ContentStyled>
      </SectionStyled>
      <Footer />
    </MoviesAndSeriesStyled>
  );
}

export default Movies;
