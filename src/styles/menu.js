import styled from 'styled-components';

const MenuStyled = styled.nav`
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

export default MenuStyled;
