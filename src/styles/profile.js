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
  align-items: center;
  display: flex;
  flex-direction: column;
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
    cursor: pointer;
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
export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--sizing-5x) 0;
  width: 68%;
`;
export const ProfilePanelBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--black-darken-project-color);
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-5x);
    padding: var(--sizing-3x) var(--sizing-3x);
    margin-bottom: var(--sizing-5x);
`;
export const HeadingBox = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: var(--sizing-5x);
  }
`;
export const ProfileCards = styled.div`
  display: flex;
  overflow-x: scroll;

  img {
    cursor: pointer;
    margin: var(--sizing-3x) var(--sizing-2x);
    width: var(--sizing-8x);
  }
`;
