import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';

function MaratoneiProvider({children}) {
  const [profile, setProfile] = useState({});
  const [userDB, setUserDB] = useState({});

  return (
    <MaratoneiContext.Provider value={ {
      profile,
      setProfile,
      userDB,
      setUserDB,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;
