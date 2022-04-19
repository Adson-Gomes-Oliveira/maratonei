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

function Series() {
  const [toggleFilter, setToggleFilter] = useState('none');
  const {pathname} = useLocation();
  const {
    fetchSeries,
    loading,
    moviesAndSeriesData,
    handleChangeSearch,
    handleEnterSearch,
    handleClickSearch,
    filter,
    removeFilters,
  } = useContext(MaratoneiContext);

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleToggle = () => {
    if (toggleFilter === 'flex') return setToggleFilter('none');
    return setToggleFilter('flex');
  };

  if (loading) return <Loading />;
  return (
    <MoviesAndSeriesStyled>
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
              <span className="material-icons-outlined">filter_list</span>
            </FilterButton>
          </SearchLabel>

          <FilterStyled style={{display: `${toggleFilter}`}}>
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

          <CardsToShow>
            <h3>SERIES MAIS POPULARES</h3>
            <MoviesCards data={moviesAndSeriesData} />
          </CardsToShow>

        </ContentStyled>
      </SectionStyled>
      <Footer />
    </MoviesAndSeriesStyled>
  );
}

export default Series;
