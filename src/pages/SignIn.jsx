import React, {useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../images/svg/logotipo.svg';
import useRegister from '../hooks/useRegister';
import MaratoneiContext from '../context/MaratoneiContext';
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
  const setRegister = useRegister();
  const {profile, setProfile} = useContext(MaratoneiContext);

  useEffect(() => { // Login validation
    setProfile({
      ...profile,
      accountCredentials: {
        ...profile.accountCredentials,
        isButtonDisabled: true,
      }});

    if (profile.accountCredentials.username.length > 3 &&
      profile.accountCredentials.password.length > 7) {
      setProfile({
        ...profile,
        accountCredentials: {
          ...profile.accountCredentials,
          isButtonDisabled: false,
        }});
    }
  }, [profile.accountCredentials]);

  const handleLogin = ({target}) => {
    const {name, value} = target;
    setProfile({
      ...profile,
      accountCredentials: {
        ...profile.accountCredentials,
        [name]: value,
      }});
  };

  const handleSignIn = () => {
    setRegister({profile});

    setTimeout(() => {
      navigate('/');
    }, 0);
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
              value={profile.accountCredentials.username}
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
              value={profile.accountCredentials.password}
              placeholder="Digite sua senha"
            />
            <span>Digite uma senha valida</span>
          </label>
          <span>Esqueci minha senha</span>
          <LoginButtons>
            <button
              type="button"
              disabled={profile.accountCredentials.isButtonDisabled}
              onClick={handleSignIn}
            >
              Login
            </button>
            <button
              type="button"
              disabled={true}
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
