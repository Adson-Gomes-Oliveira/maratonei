import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  SearchLabel,
  SearchInput,
  SearchButton,
  FilterButton,
  FilterStyled,
} from '../styles/moviesAndSeries';
import '../styles/cssAnimations.css';

function SearchArea() {
  const {pathname} = useLocation();
  const {
    handleChangeSearch,
    handleEnterSearch,
    handleClickSearch,
    filter,
    removeFilters,
    handleToggle,
    rotateWhenClick,
    toggleFilter,
  } = useContext(MaratoneiContext);

  return (
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
            onKeyDown={(event) =>
              handleEnterSearch(event, pathname)}
            value={filter.yearSearchFilter}
          />
        </label>
        <button
          type="button"
          onClick={() => removeFilters(pathname)}
        >X</button>
      </FilterStyled>
    </SearchLabel>
  );
}

export default SearchArea;
