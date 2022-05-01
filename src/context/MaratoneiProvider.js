import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';

function MaratoneiProvider({children}) {
  const [profile, setProfile] = useState({
    accountCredentials: {
      username: '',
      password: '',
      isButtonDisabled: true,
    },
    accountProfile: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      age: '',
      country: '',
      profileImg: '',
      profileAbout: '',
    },
    accountFavorites: {
      movies: [],
      tvShows: [],
    },
    accountWatch: {
      toWatch: {},
      watching: {},
      notWatched: {},
      timeWatched: {},
    },
    accountBadges: {},
  });
  return (
    <MaratoneiContext.Provider value={ {
      profile,
      setProfile,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;
