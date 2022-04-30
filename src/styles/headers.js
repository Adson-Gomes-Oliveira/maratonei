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

export const AlternativeHeaderStyled = styled.header`
  align-items: center;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: var(--sizing-2x) var(--sizing-3x);

  img {
    height: 4rem;
    width: 8rem;
  }
`;
