import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';
import castAndCrew from '../services/castAndCrewAPI';
import movieReviews from '../services/movieReviewsAPI';
import useRequestAPI,
{
  useQueryAPI,
} from '../hooks/useRequestAPI';

function MaratoneiProvider({children}) {
  const {result, request, setRequest, setResult} = useRequestAPI();
  const setFilterQuery = useQueryAPI(request, setResult);

  const [castAndCrewData, setCastAndCrewData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [toggleFilter, setToggleFilter] = useState('stand-by-toggle');
  const [rotateWhenClick, setRotate] = useState('stand-by');
  const [filter, setFilter] = useState({
    inputSearchFilter: '',
    yearSearchFilter: '',
  });

  const fetchReviews = async (movieId) => {
    const data = await movieReviews(movieId);

    return setReviews(data);
  };

  const fetchCastAndCrew = async (movieId) => {
    const data = await castAndCrew(movieId);

    setCastAndCrewData(data);
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
      fetchCastAndCrew,
      fetchReviews,
      handleToggle,
      reviews,
      toggleFilter,
      rotateWhenClick,
      filter,
      handleChangeSearch,
      handleClickSearch,
      handleEnterSearch,
      removeFilters,
      castAndCrewData,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;
