import styled from 'styled-components';

// --------- Header Styles ------------ //
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

export const SecondHeaderStyled = styled.header`
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

// --------- Menu Styles ------------ //
export const MenuStyled = styled.nav`
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

export const MenuLoginStyled = styled.div`
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  span:nth-child(1) {
    position: relative;
    top: 0.05rem;
  }

  span:nth-child(2) {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;

// --------- Streaming Styles ------------ //
export const StreamingsStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5%;
  
  img {
    opacity: 0.5;
    width: 100px;
  }
`;

// --------- Ad Styles ------------ //
export const AdStyled = styled.div`
  align-items: center;
  background-size: cover;
  background: url(${(props) => props.bgImage});
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Bebas', sans-serif;
  font-size: var(--sizing-4x);
  justify-content: center;
  padding: var(--sizing-3x) 0;
  min-height: 5rem;
  span:nth-child(2) {
    font-size: var(--sizing-3x);
  }
`;

// --------- Card Styles --------- //
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

  img {
    width: 13rem;
    height: 19.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
    margin-bottom: 2.5rem;
    width: 12rem;

    span {
      font-size: var(--sizing-5x);
      color: var(--yellow-project-color);
    }
  }
`;

// --------- Footer Styles --------- //
export const FooterStyled = styled.footer`
  background: black;
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisclaimerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const DisclaimerText = styled.div``;
