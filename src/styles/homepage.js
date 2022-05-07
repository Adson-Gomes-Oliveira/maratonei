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
  height: 50%;
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
