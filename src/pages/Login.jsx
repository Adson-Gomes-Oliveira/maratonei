import React, {useState} from 'react';
import Enter from '../components/Enter';
import {
  LeftSideStyled,
  LoginStyled,
  RightSideStyled,
} from '../styles/signInUp';

function Login() {
  const [mode, setMode] = useState('sign-in');

  return (
    <LoginStyled>
      <LeftSideStyled>
        {/* {mode === 'sign-up' && (

        )} */}
      </LeftSideStyled>
      <RightSideStyled>
        {mode === 'sign-in' && (
          <Enter setMode={setMode} />
        )}
      </RightSideStyled>
    </LoginStyled>
  );
}

export default Login;
