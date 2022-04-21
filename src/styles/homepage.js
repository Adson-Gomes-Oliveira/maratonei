import styled from 'styled-components';
import backgroundHp from '../images/background-homepage.webp';

export const HomepageStyled = styled.section`
  background: rgba(21, 21, 31, 0.75) url(${backgroundHp});
  background-blend-mode: darken;
  background-size: cover;
  display: flex;
  flex-direction: column;
  user-select: none;
  height: 100vh;
`;

export const HeroBrandingStyled = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: center;

  span:nth-child(1) {
    font-family: 'bebas', 'Arial', sans-serif;
    font-size: 2.5rem;
  }

  span:nth-child(2) {
    font-family: 'Arial', sans-serif;
    font-size: var(--sizing-3x);
  }
`;

export const HomepageButtonsStyled = styled.div`
  align-self: center;
  display: flex;

  button {
    background-color: var(--black-project-color);
    border-radius: var(--sizing-2x);
    border: 0.18rem solid var(--yellow-project-color);
    color: white;
    cursor: pointer;
    font-family: 'Bebas', sans-serif;
    font-size: 1.5rem;
    margin: 0 var(--sizing-1x);
    min-width: 18.75rem;
    padding: var(--sizing-3x) 0;
    transition: ease 0.2s;
  }

  button:hover {
    background-color: var(--yellow-project-color);
    color: black;
    transition: ease 0.2s;
  }
`;
