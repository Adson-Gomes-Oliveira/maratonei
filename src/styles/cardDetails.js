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

export const CardVideo = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: var(--sizing-5x) 0 var(--sizing-7x) var(--sizing-5x);

  h3 {
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-4x);
    font-weight: 500;
    margin: var(--sizing-3x) 0;
  }
`;

export const CardRecomendations = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: white;
    margin: var(--sizing-5x) 0;
  }

  div {
    display: flex;
    justify-content: space-between;

    img {
      cursor: pointer;
      width: 9rem;
      height: 13rem;
    }
  }

`;

export const CardRevenue = styled.div`
  align-self: flex-start;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'bebas', sans-serif;
  font-size: 1.1rem;
  opacity: 0.7;

  span:nth-child(1) {
    margin-bottom: var(--sizing-2x);
  }

  span:nth-child(2) {
    span:nth-child(1) {
      margin-right: var(--sizing-2x);
    }
  }

  span:nth-child(3) {
    span:nth-child(1) {
      margin-right: var(--sizing-2x);
    }
  }
`;

export const CardCompanies = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  font-family: 'bebas', sans-serif;
  color: white;

  img {
    border: none;
    margin: var(--sizing-5x) 0;
    width: 10rem;
  }

  span {
    opacity: 0.7;
  }

  span:nth-child(2) {
    font-size: 1.1rem;
    margin-bottom: var(--sizing-2x);
    opacity: 1;
  }
`;
