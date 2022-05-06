import styled from 'styled-components';
import whiteBg from '../images/bg-signin.webp';
import blackBg from '../images/bg-signup.webp';

export const EnterStyled = styled.section`
  display: flex;
  height: 100vh;
`;

// ----------> Login Styles <---------- //

export const LoginStyled = styled.div`
  align-items: center;
  background: url(${whiteBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  width: 50%;
`;
export const LoginForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
  visibility: ${(props) => {
    if (props.sectionOnStage === 'sign-up') {
      return 'hidden';
    }
  }};
  width: 60%;

  img {
    height: 8rem;
    margin-bottom: var(--sizing-5x);
    width: 15rem;
  }

  div {
    margin: var(--sizing-3x) 0;
  }

  div:nth-child(2) {
    align-self: center;
    margin: 0;
  }
`;
export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: var(--sizing-3x) 0;

  input {
    border-radius: var(--sizing-2x);
    border: 0.20rem solid var(--black-project-color);
    font-size: 1.1rem;
    height: 2.5rem;
    padding: var(--sizing-1x);
    width: 25rem;
  }

  input:focus {
    border-color: var(--yellow-project-color);
    outline: none;
  }

  span {
    color: var(--black-project-color);
    font-family: 'bebas', sans-serif;
    font-size: 1.1rem;
    margin-top: var(--sizing-2x);
  }
`;
export const LoginButton = styled.button`
  background-color: var(--yellow-project-color);
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'bebas', sans-serif;
  font-size: 1.1rem;
  margin: 0 var(--sizing-2x);
  padding: var(--sizing-3x) 0;
  transform: skew(-20deg);
  width: var(--sizing-8x);

  :disabled {
    background-color: var(--black-project-color);
    cursor: default;
  }
`;

// ----------> Register Styles <---------- //

export const RegisterStyled = styled.div`
  align-items: center;
  background: url(${blackBg});
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 50%;
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  visibility: ${(props) => {
    if (props.sectionOnStage === 'sign-in') {
      return 'hidden';
    }
  }};
  width: 80%;

  span:first-of-type {
    align-self: center;
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: 1.1rem;
  }

  div {
    align-items: center;
    display: flex;
  }

  b {
    color: red;
    margin: 0 var(--sizing-2x);
  }
`;
export const RegisterLabel = styled.label`
  align-items: center;
  color: white;
  display: flex;
  font-family: 'bebas', sans-serif;
  font-size: 1.1rem;
  margin: var(--sizing-3x) 0;

  input {
    height: var(--sizing-5x);
    margin-left: var(--sizing-2x);
    padding: var(--sizing-2x);
    width: 100%;
  }

  select {
    height: var(--sizing-5x);
    margin-left: var(--sizing-2x);
    padding: var(--sizing-2x);
    width: 100%;
  }

  :nth-child(2) {
    margin-left: var(--sizing-3x);
  }

  :nth-child(3) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      font-size: 1.1rem;
    }

    span:nth-child(2) {
      color: gray;
      font-family: sans-serif;
      font-size: var(--sizing-3x);
      margin: var(--sizing-2x) 0;
    }
  }

  :nth-child(6) {
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: space-around;
    text-align: center;

    span:nth-child(2) {
      font-family: sans-serif;
      font-size: var(--sizing-3x);
    }
  }
`;
export const RegisterProfileImage = styled.img``;
export const RegisterButtons = styled.div`
  align-self: center;
`;
export const Button = styled.button`
  background-color: var(--yellow-project-color);
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'bebas', sans-serif;
  font-size: 1.1rem;
  margin: 0 var(--sizing-2x);
  padding: var(--sizing-3x) 0;
  transform: skew(-20deg);
  width: var(--sizing-8x);

  :disabled {
    background-color: var(--black-project-color);
    cursor: default;
  }
`;
