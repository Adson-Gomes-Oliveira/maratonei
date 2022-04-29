import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import useRequestAPI, {useQueryAPI} from '../hooks/useRequestAPI';

function MaratoneiProvider({children}) {
  const {result, request, setRequest, setResult} = useRequestAPI();
  const setFilterQuery = useQueryAPI(request, setResult);

  const [toggleFilter, setToggleFilter] = useState('stand-by-toggle');
  const [rotateWhenClick, setRotate] = useState('stand-by');
  const [filter, setFilter] = useState({
    inputSearchFilter: '',
    yearSearchFilter: '',
  });

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

  const removeFilters = (actualPath) => {
    setFilter({
      inputSearchFilter: '',
      yearSearchFilter: '',
    });

    handleToggle();
  };

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

  return (
    <MaratoneiContext.Provider value={ {
      result,
      setRequest,
      handleToggle,
      toggleFilter,
      rotateWhenClick,
      filter,
      handleChangeSearch,
      handleClickSearch,
      handleEnterSearch,
      removeFilters,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;
