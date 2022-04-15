import styled from 'styled-components';
import backgroundHp from '../images/background-homepage.webp';

export const HomepageStyled = styled.section`
  background: rgba(21, 21, 31, 0.75) url(${backgroundHp});
  background-size: cover;
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HeroBrandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45%;
  color: white;

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
  display: flex;
  align-self: center;

  button {
    padding: var(--sizing-4x) var(--sizing-6x);
    margin: 0 var(--sizing-1x);
    border-radius: var(--sizing-2x);
    font-family: 'Bebas', sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
  }

  a:nth-child(1) {
    button {
      transition: ease 0.2s;
      background-color: var(--yellow-project-color);
      border: 0.18rem solid var(--yellow-project-color);
      color: black
    }

    button:hover {
      transition: ease 0.2s;
      background-color: var(--main-project-color);
      border: 0.18rem solid var(--yellow-project-color);
      color: white;
    }
  }

  a:nth-child(2) {
    button {
      transition: ease 0.2s;
      background-color: var(--main-project-color);
      border: 0.18rem solid var(--yellow-project-color);
      color: white;
    }

    button:hover {
      transition: ease 0.2s;
      background-color: var(--yellow-project-color);
      color: black;
    }
  }
`;
