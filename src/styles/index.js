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
