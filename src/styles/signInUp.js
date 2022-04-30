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
      font-size: var(--sizing-3x);
      margin: 0;
      cursor: auto;
    }
  }

  label:nth-child(1) {
    margin-bottom: var(--sizing-2x);
  }

  input:focus {
    outline: 0;
    border: 0.2rem solid var(--black-light-project-color);
  }

  span {
    font-family: 'bebas', sans-serif;
    font-size: 1.3rem;
    color: var(--yellow-project-color);
    margin: var(--sizing-3x) 0;
    cursor: pointer;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  button {
    border: none;
    color: white;
    background-color: var(--yellow-project-color);
    font-family: 'bebas', sans-serif;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.8rem 0;
    width: 50%;
    margin: var(--sizing-2x);
  }

  button:disabled {
    background-color: var(--black-light-project-color);
  }

  a {
    width: auto;
  }
`;
