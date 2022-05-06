import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {
  RegisterStyled,
  RegisterForm,
  RegisterLabel,
  RegisterButtons,
  Button,
} from '../styles/enter';
import requestCountrys from '../services/requestCountrys';
import useRegister from '../hooks/useRegister';

function Register({section, stateController}) {
  const [formState, setFormState] = useState({
    inputEmail: '',
    inputPassword: '',
    inputName: '',
    selectCountry: '',
    inputSocial: '',
  });
  const [countrys, setCountrys] = useState([]);
  const [isButtonDisabled, setDisabled] = useState(true);
  const setRegister = useRegister();

  useEffect(() => {
    const requestCountryNames = async () => {
      const data = await requestCountrys();
      setCountrys(data);
    };

    requestCountryNames();
  }, []);

  useEffect(() => {
    setDisabled(true);
    const {inputEmail, inputPassword, inputName} = formState;
    const emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        .test(inputEmail);
    const passVal = inputPassword.length > 7;
    const nameVal = inputName.length > 2;

    if (emailVal && passVal && nameVal) setDisabled(false);
  }, [formState]);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormState({...formState, [name]: value});
  };

  const handleClick = ({target}) => {
    const {name} = target;

    if (name === 'register') setRegister(formState);
    if (name === 'login') stateController('sign-in');
  };

  return (
    <RegisterStyled>
      <RegisterForm sectionOnStage={section} >
        <span>Todos os campos com <b>*</b> são obrigatórios</span>
        <div>
          <RegisterLabel htmlFor="email">
            <span><b>*</b>Email</span>
            <input
              type="email"
              id="email"
              name="inputEmail"
              placeholder="Digite um email válido ✉"
              onChange={handleChange}
              value={formState.inputEmail}
            />
          </RegisterLabel>
          <RegisterLabel htmlFor="password">
            <span><b>*</b>Senha</span>
            <input
              type="password"
              id="password"
              name="inputPassword"
              placeholder="Digite uma senha de no mínimo 8 dígitos 🔒"
              onChange={handleChange}
              value={formState.inputPassword}
            />
          </RegisterLabel>
        </div>
        <RegisterLabel htmlFor="photo">
          <div>
            <span>Escolha sua foto de perfil</span>
            <input
              type="text"
              id="photo"
              name="inputPhoto"
              placeholder="Digite ou cole o link de uma imagem para seu perfil"
              onChange={handleChange}
              value={formState.inputPhoto}
            />
            <img src={formState.inputPhoto} alt="Imagem de Perfil"/>
          </div>
          <span>
            Dê preferência a imagens de 500 x 500
            ou maiores até 1000 x 1000, tamanhos maiores
            podem acarretar em imagens com má visibilidade.
          </span>
        </RegisterLabel>
        <RegisterLabel htmlFor="name">
          <span><b>*</b>Como você se chama?</span>
          <input
            type="text"
            id="name"
            name="inputName"
            placeholder="Digite seu nome :D"
            onChange={handleChange}
            value={formState.inputName}
          />
        </RegisterLabel>
        <RegisterLabel htmlFor="country">
          <span><b>*</b>De onde você é?</span>
          <select
            type="text"
            id="country"
            name="selectCountry"
            onChange={handleChange}
            value={formState.selectCountry}
          >
            {countrys.map((country) => (
              <option key={uuidv4()} value={country}>{country}</option>
            ))}
          </select>
        </RegisterLabel>
        <RegisterLabel htmlFor="social">
          <span>Coloca uma rede social pro pessoal te encontrar ;D</span>
          <span>
            *Esta funcionalidade é apenas uma simulação, suas redes não
            serão visíveis a ninguem além de você mesmo.
          </span>
          <input
            type="text"
            id="social"
            name="inputSocial"
            placeholder="Digite o link do seu instagram"
            onChange={handleChange}
            value={formState.inputSocial}
          />
        </RegisterLabel>
        <RegisterButtons>
          <Button
            type="button"
            name="register"
            disabled={isButtonDisabled}
            onClick={handleClick}
          >
            Cadastrar
          </Button>
          <Button
            type="button"
            name="login"
            onClick={handleClick}
          >
            Fazer Login
          </Button>
        </RegisterButtons>
      </RegisterForm>
    </RegisterStyled>
  );
}

Register.propTypes = {
  stateController: PropTypes.func.isRequired,
  section: PropTypes.string,
};

export default Register;
