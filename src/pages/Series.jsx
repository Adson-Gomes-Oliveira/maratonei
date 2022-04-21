import React, {useEffect, useContext} from 'react';
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
  DisclaimerResults,
} from '../styles/moviesAndSeries';
import '../styles/cssAnimations.css';
import GeekArticles from '../components/GeekArticles';

function Series() {
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
    setLoading,
    handleToggle,
    rotateWhenClick,
    toggleFilter,
  } = useContext(MaratoneiContext);

  useEffect(() => {
    fetchSeries();
    setLoading(true);
    const showLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(showLoading);
    };
  }, []);

  return (
    <>
      <AlternativeHeader />
      <Advisor />
      <MoviesAndSeriesStyled>
        {loading && <Loading />}

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
              <h3>SERIES MAIS POPULARES</h3>
              <MoviesCards data={moviesAndSeriesData} />
            </CardsToShow>
            <DisclaimerResults>
              * Resultados limitados de 20 a 40 por busca, para mais resultados
              utilize a caixa de pesquisa ou os filtros disponiveis no site.
            </DisclaimerResults>

          </ContentStyled>

          <GeekArticles />

        </SectionStyled>
      </MoviesAndSeriesStyled>
      <Footer />
    </>
  );
}

export default Series;
