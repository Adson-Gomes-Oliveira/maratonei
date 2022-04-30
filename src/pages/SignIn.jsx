import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import MaratoneiContext from '../context/MaratoneiContext';
import Logo from '../images/svg/logotipo.svg';
import {
  LoginStyled,
  LeftSideStyled,
  RightSideStyled,
  LoginForm,
  LoginButtons,
} from '../styles/signInUp';

function SignIn() {
  const {login, handleLogin} = useContext(MaratoneiContext);
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    return navigate('/sign-up');
  };

  return (
    <LoginStyled>
      <LeftSideStyled>
      </LeftSideStyled>
      <RightSideStyled>
        <LoginForm>
          <img src={Logo} alt="Logotipo Maratonei" />
          <label htmlFor="username">
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleLogin}
              value={login.username}
              placeholder="Digite seu nome de usuário"
            />
            <span>Digite um usuário valido</span>
          </label>
          <label htmlFor="password">
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleLogin}
              value={login.password}
              placeholder="Digite sua senha"
            />
            <span>Digite uma senha valida</span>
          </label>
          <span>Esqueci minha senha</span>
          <LoginButtons>
            <button
              type="button"
              disabled={login.isButtonDisabled}
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleClickSignUp}
            >
                Cadastre-se
            </button>
          </LoginButtons>
        </LoginForm>
      </RightSideStyled>
    </LoginStyled>
  );
}

export default SignIn;
