import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';

function MaratoneiProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [userDB, setUserDB] = useState({});

  return (
    <MaratoneiContext.Provider value={ {
      profile,
      setProfile,
      userDB,
      setUserDB,
      loading,
      setLoading,
    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;
