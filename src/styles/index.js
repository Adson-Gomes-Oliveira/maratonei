import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--sizing-3x);

  img {
    width: 11.25rem;
    height: 6.12rem;
  }
`;

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

  img {
    width: var(--sizing-5x);
    height: var(--sizing-5x);
    align-self: center;
  }
`;

export const StreamingsStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  
  img {
    width: 100px;
    opacity: 0.5;
  }
`;
