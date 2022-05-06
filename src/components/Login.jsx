import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import blackLogo from '../images/black-logotipo.webp';
import useValidate from '../hooks/useValidate';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  LoginStyled,
  LoginForm,
  LoginLabel,
  LoginButton,
} from '../styles/enter';

function Login({section, stateController}) {
  const navigate = useNavigate();
  const [isButtonDisabled] = useState(false);
  const [authorized, setLogin] = useValidate();
  const {setProfile} = useContext(MaratoneiContext);
  const [formState, setFormState] = useState({
    inputEmail: '',
    inputPassword: '',
  });

  useEffect(() => {
    if (authorized) {
      const recoverUser = JSON.parse(localStorage.getItem('user-register'));
      if (recoverUser) {
        setProfile(recoverUser[0]);
      }
      navigate('/');
    }
  }, [authorized]);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormState({...formState, [name]: value});
  };

  const handleClick = ({target}) => {
    const {name} = target;

    if (name === 'enter') setLogin(formState);
    if (name === 'register') stateController('sign-up');
  };

  return (
    <LoginStyled>
      <LoginForm sectionOnStage={section} >
        <img src={blackLogo} alt="Logotipo Maratonei" />
        <div>
          <LoginLabel htmlFor='email'>
            <input
              type="email"
              id="email"
              name="inputEmail"
              onChange={handleChange}
              value={formState.inputEmail}
            />
            <span>Digite em email válido</span>
          </LoginLabel>
          <LoginLabel htmlFor='password'>
            <input
              type="password"
              id="password"
              name="inputPassword"
              onChange={handleChange}
              value={formState.inputPassword}
            />
            <span>Digite sua senha</span>
          </LoginLabel>
        </div>
        <div>
          <LoginButton
            type="button"
            name="enter"
            onClick={handleClick}
            disabled={isButtonDisabled}
          >
            Entrar
          </LoginButton>
          <LoginButton
            type="button"
            name="register"
            onClick={handleClick}
          >
            Cadastrar-se
          </LoginButton>
        </div>
      </LoginForm>
    </LoginStyled>
  );
}

Login.propTypes = {
  stateController: PropTypes.func.isRequired,
  section: PropTypes.string,
};

export default Login;
