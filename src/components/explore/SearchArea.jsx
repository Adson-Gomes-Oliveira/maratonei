import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {useQueryAPI} from '../../hooks/useRequestAPI';
import {
  SearchLabel,
  SearchInput,
  SearchButton,
  FilterButton,
  FilterStyled,
} from '../../styles/media';
import '../../styles/cssAnimations.css';

function SearchArea({stateUpdate}) {
  const {pathname} = useLocation();
  const [result, setFilterQuery] = useQueryAPI(pathname);
  const [toggleFilter, setToggleFilter] = useState('stand-by-toggle');
  const [rotateWhenClick, setRotate] = useState('stand-by');
  const [filter, setFilter] = useState({
    inputSearchFilter: '',
    yearSearchFilter: '',
  });

  useEffect(() => {
    stateUpdate(result);
  }, [result]);

  const handleChangeSearch = ({target}) => {
    const {name, value} = target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnterSearch = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      setFilterQuery({
        search: filter.inputSearchFilter,
        year: filter.yearSearchFilter,
      });
    }
  };

  const handleClickSearch = async () => {
    setFilterQuery({
      search: filter.inputSearchFilter,
      year: filter.yearSearchFilter,
    });
  };

  const handleToggle = () => {
    if (rotateWhenClick === 'stand-by') setRotate('filterActivated');
    if (rotateWhenClick === 'filterActivated') setRotate('filterDeactivated');
    if (rotateWhenClick === 'filterDeactivated') setRotate('filterActivated');
    if (toggleFilter === 'stand-by-toggle') {
      return setToggleFilter('showFilter');
    }
    if (toggleFilter === 'hiddenFilter') return setToggleFilter('showFilter');
    return setToggleFilter('hiddenFilter');
  };

  const removeFilters = () => {
    setFilter({
      inputSearchFilter: '',
      yearSearchFilter: '',
    });

    handleToggle();
  };

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

SearchArea.propTypes = {
  stateUpdate: PropTypes.func,
};

export default SearchArea;
