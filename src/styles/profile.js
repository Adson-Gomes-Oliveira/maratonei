import styled from 'styled-components';

export const ProfileStyled = styled.section`
  display: flex;
`;

export const NoProfileStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-family: 'bebas', sans-serif;
  font-size: var(--sizing-5x);
  color: white;
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--sizing-5x) var(--sizing-5x);
  width: 30%;

  img {
    border: 0.5rem solid white;
    width: 100%;
  }
`;
export const FirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: var(--sizing-4x);
  width: 100%;

  button {
    color: white;
    background: none;
    border: none;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-4x);
    margin: var(--sizing-3x) 0;
  }

  span {
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-4x);
  }

  div {
    display: flex;
    flex-direction: column;
    margin: var(--sizing-3x) 0;
    width: 100%;

    span {
      font-size: 1.3rem;
    }

    span:nth-child(2) {
      align-self: center;
      margin: var(--sizing-7x) 0;
    }

    span:nth-child(3) {
      font-family: sans-serif;
      font-size: 1.1rem;
      margin: var(--sizing-2x) 0;
    }
  }
`;
export const ProfilePanel = styled.div``;
