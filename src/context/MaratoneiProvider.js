import React from 'react';
import PropTypes from 'prop-types';
import MaratoneiContext from './MaratoneiContext';

function MaratoneiProvider({children}) {
  return (
    <MaratoneiContext.Provider value={ {

    } }>
      {children}
    </MaratoneiContext.Provider>
  );
}

MaratoneiProvider.propTypes = {
  children: PropTypes.node,
};

export default MaratoneiProvider;
