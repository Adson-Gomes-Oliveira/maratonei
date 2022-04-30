import styled from 'styled-components';

export const MediaReviewStyled = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'bebas', sans-serif;
  margin-top: var(--sizing-6x);

  h3 {
    align-self: center;
    font-size: var(--sizing-5x);
    font-weight: 500;
  }

  span {
    align-self: center;
  }
`;

export const ReviewStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: var(--sizing-5x) 0;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;

    a {
      color: var(--yellow-project-color);
      font-size: 1.2rem;
      text-decoration: none;
    }

    span {
      align-self: self-start;
    }

    span:nth-child(1) {
      font-size: 1.2rem;
      margin-bottom: var(--sizing-2x);
    }

    span:nth-child(2) {
      font-family: 'bebas', sans-serif;
      margin-bottom: var(--sizing-2x);
    }
  }
`;
