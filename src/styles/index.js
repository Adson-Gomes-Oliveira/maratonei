import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--sizing-3x);

  img {
    height: 6.12rem;
    width: 11.25rem;
  }
`;

export const SecondHeaderStyled = styled.header`
  align-items: center;
  background-color: var(--black-project-color);
  display: flex;
  justify-content: space-between;
  padding: var(--sizing-2x) var(--sizing-2x);

  img {
    height: 5rem;
    width: 9.5rem;
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
    align-self: center;
    height: var(--sizing-5x);
    width: var(--sizing-5x);
  }
`;

export const StreamingsStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5%;
  
  img {
    opacity: 0.5;
    width: 100px;
  }
`;
