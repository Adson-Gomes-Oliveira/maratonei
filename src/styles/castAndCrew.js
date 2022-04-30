import styled from 'styled-components';

export const CastAndCrewStyled = styled.div`
  background-color: #0d0d14;
  display: flex;
  flex-direction: column;
  width: 25%;

  h2 {
    color: white;
    margin: var(--sizing-5x);
  }
`;

export const CastStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--sizing-3x);
`;

export const PersonStyled = styled.div`
  align-items: center;
  color: white;
  display: flex;

  img {
    border: 0.2rem solid var(--black-project-color);
    margin-bottom: 2rem;
    width: 5.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 1rem;

    span:nth-child(1) {
      margin-top: var(--sizing-2x);
      margin-bottom: var(--sizing-4x);
    }
  }
`;
