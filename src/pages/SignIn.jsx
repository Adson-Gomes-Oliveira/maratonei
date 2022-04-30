import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../images/svg/logotipo.svg';
import {
  LoginStyled,
  LeftSideStyled,
  RightSideStyled,
  LoginForm,
  LoginButtons,
  LoginDisclaimer,
} from '../styles/signInUp';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: '',
    password: '',
    isButtonDisabled: true,
  });

  const handleClickSignUp = () => {
    return navigate('/sign-up');
  };

  useEffect(() => { // Login validation
    setLogin({...login, isButtonDisabled: true});
    if (login.username.length > 3 &&
    login.password.length > 7) {
      setLogin({...login, isButtonDisabled: false});
    }
  }, [login]);

  const handleLogin = ({target}) => {
    const {name, value} = target;
    setLogin({...login, [name]: value});
  };

  return (
    <LoginStyled>
      <LeftSideStyled>
      </LeftSideStyled>
      <RightSideStyled>
        <LoginForm>
          <img src={Logo} alt="Logotipo Maratonei" />
          <LoginDisclaimer>
              *Funcionalidade de cadastro ainda não desenvolvida,
              digite qualquer nome de usuario e uma senha, que as
              funcionalidades adicionais serão desbloqueadas.
          </LoginDisclaimer>
          <label htmlFor="username">
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleLogin}
              value={login.username}
              placeholder="Digite seu nome de usuário"
              autoComplete="off"
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
              disabled={login.isButtonDisabled}
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

export default Login;
