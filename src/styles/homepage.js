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
    font-size: var(--sizing-6x);
  }

  span:nth-child(2) {
    font-family: 'Arial', sans-serif;
    font-size: var(--sizing-4x);
  }
`;
