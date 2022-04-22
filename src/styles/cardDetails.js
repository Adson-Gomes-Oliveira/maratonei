import styled from 'styled-components';

export const CardDetailStyled = styled.section`
  display: flex;
`;

export const CardsLeftSectionStyled = styled.div`
  display: flex;
  margin: var(--sizing-4x);
  width: 75%;

  img {
    border: 0.5rem solid var(--black-light-project-color);
    width: 15rem;
  }
`;

export const CardPrimaryInfos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    width: 13rem;

    span {
      color: var(--yellow-project-color);
      font-size: var(--sizing-5x);
      margin: var(--sizing-3x) 0;
    }
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardVotes = styled.span`
  align-self: flex-start;
  color: white;
  font-family: 'bebas', sans-serif;
  font-size: 1.2rem;
`;

export const CardRealease = styled.span`
  align-self: flex-start;
  color: white;
  font-family: 'bebas', sans-serif;
  font-size: 1.1rem;
`;

export const CardCategorys = styled.div`
  align-self: flex-start;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: 'bebas', sans-serif;
  font-size: 1.1rem;
  margin: var(--sizing-3x) 0;

  span {
    margin-left: 0.5rem;
  }

  span:nth-child(1) {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
`;

export const CardHeadline = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--sizing-4x);

  h2 {
    color: white;
    font-family: 'bebas', sans-serif;
    font-weight: 500;
  }

  span {
    color: white;
    font-family: 'bebas', sans-serif;
    font-weight: 500;
  }

  p {
    color: white;
    font-family: serif, sans-serif;
    font-size: 1.2rem;
    margin-top: var(--sizing-3x);
    text-align: justify;
  }
`;

export const CardVideo = styled.div``;
