import styled from 'styled-components';

export const LoginStyled = styled.section`
  display: flex;
`;

export const LeftSideStyled = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 50%;
`;

export const RightSideStyled = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const LoginForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 60%;

  img {
    height: 10rem;
    margin: var(--sizing-5x);
    width: 18rem;
  }

  input {
    border-radius: 0.4rem;
    border: 0.2rem solid var(--yellow-project-color);
    height: var(--sizing-6x);
    margin: var(--sizing-2x) 0;
    padding: var(--sizing-1x);
    width: 20rem;
  }

  label {
    display: flex;
    flex-direction: column;

    span {
      color: var(--yellow-project-color);
      cursor: auto;
      font-size: var(--sizing-3x);
      margin: 0;
    }
  }

  label:nth-child(1) {
    margin-bottom: var(--sizing-2x);
  }

  input:focus {
    border: 0.2rem solid var(--black-light-project-color);
    outline: 0;
  }

  span {
    color: var(--yellow-project-color);
    cursor: pointer;
    font-family: 'bebas', sans-serif;
    font-size: 1.3rem;
    margin: var(--sizing-3x) 0;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  button {
    background-color: var(--yellow-project-color);
    border: none;
    color: white;
    cursor: pointer;
    font-family: 'bebas', sans-serif;
    font-size: 1.1rem;
    margin: var(--sizing-2x);
    padding: 0.8rem 0;
    width: 50%;
  }

  button:disabled {
    background-color: var(--black-light-project-color);
  }

  a {
    width: auto;
  }
`;

export const LoginDisclaimer = styled.p`
  color: var(--black-light-project-color);
  font-size: 1rem;
  font-family: 'bebas', sans-serif;
  margin: var(--sizing-2x) 0;
  text-align: center;
`;
