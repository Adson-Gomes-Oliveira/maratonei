import React, {useState} from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import {EnterStyled} from '../styles/enter';

function Enter() {
  const [section, setSectionToShow] = useState('sign-in');

  return (
    <EnterStyled>
      <Register section={section} stateController={setSectionToShow} />
      <Login section={section} stateController={setSectionToShow} />
    </EnterStyled>
  );
}

export default Enter;
