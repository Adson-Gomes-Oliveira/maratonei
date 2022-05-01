import styled from 'styled-components';

export const MenuStyled = styled.nav`
  display: flex;
  font-family: 'Bebas', sans-serif;
  font-size: var(--sizing-4x);
  
  a {
    color: white;
    margin: var(--sizing-2x);
    text-decoration: none;
  }

  a:nth-child(1) {
    color: aliceblue;
    margin-left: var(--sizing-6x);
  }

  a:hover {
    color: var(--yellow-project-color);
  }
`;

export const MenuLoginStyled = styled.div`
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  span:nth-child(1) {
    position: relative;
    top: 0.05rem;
  }

  span:nth-child(2) {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;
