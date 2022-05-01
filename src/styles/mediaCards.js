import styled from 'styled-components';

export const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13rem;
  margin-left: 1.5rem;

  a {
    text-decoration: none;
  }

  img {
    width: 13rem;
    height: 19.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    width: 12rem;

    span {
      font-size: var(--sizing-5x);
      color: var(--yellow-project-color);
    }
  }
`;

export const CardTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  width: 100%;
  min-height: 4rem;
`;
