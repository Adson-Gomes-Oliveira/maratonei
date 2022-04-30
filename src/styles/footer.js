import styled from 'styled-components';

export const FooterStyled = styled.footer`
  align-items: flex-start;
  background: black;
  display: flex;
  justify-content: space-between;
  height: 12rem;

  img:nth-child(1) {
    align-self: center;
    height: 6.12rem;
    margin: 0 var(--sizing-3x);
    width: 11.25rem;
  }
`;

export const SocialMediaStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  height: 100%;

  img {
    width: var(--sizing-5x);
  }

  img:nth-child(1) {
    width: var(--sizing-5x);
    height: var(--sizing-5x);
  }
`;

export const DisclaimerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const DisclaimerText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 70%;
  margin: 1rem 0 0 1rem;

  span {
    margin-bottom: var(--sizing-2x);
  }

  b {
    font-size: var(--sizing-4x);
  }
`;
