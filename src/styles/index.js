import styled, {keyframes} from 'styled-components';

const scaleUpDown = keyframes`
  0% {transform: scale(1)}
  100% {transform: scale(0.5)}
`;

const focusOnHover = keyframes`
  0% {transform: scale(1)}
  100% {transform: scale(1.5)}
`;

// --------- Loading Styles --------- //
export const LoadingStyled = styled.section`
  align-items: center;
  animation: ${scaleUpDown} 1s alternate infinite ease-in;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;

  img {
    height: 13rem;
    width: 25rem;
  }
`;

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

// --------- Articles Styles --------- //
export const GeekStyled = styled.section`
  align-items: center;
  background-color: #0d0d14;
  display: flex;
  flex-direction: column;
  padding: var(--sizing-5x) var(--sizing-3x);
  width: 30%;

  h3 {
    color: white;
    font-size: var(--sizing-4x);
    margin-bottom: var(--sizing-4x);
  }
`;

export const GeekArticleStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    margin: var(--sizing-3x) 0;
    width: 22rem;
  }
`;

export const ArticleTitle = styled.h4`
  color: white;
  font-size: var(--sizing-3x);
  margin-top: 1rem;
`;

export const SummaryArticle = styled.p`
  color: white;
  text-align: justify;
`;

export const ArticleLink = styled.a`
  color: white;
  font-weight: 700;
  margin: var(--sizing-4x);
`;

export const DisclaimerArticle = styled.span`
  color: white;
  text-align: center;
  width: 100%;
`;

// --------- Footer Styles --------- //
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
  background-color: aliceblue;
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

// --------- Streamings Page Styles --------- //
export const StreamingsPageStyled = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-5x);
    font-weight: 500;
    margin-top: var(--sizing-5x);
  }

  h3 {
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-4x);
    font-weight: 500;
  }
`;

export const StreamingImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: var(--sizing-7x) 0;
  width: 90%;

  img {
    margin: var(--sizing-5x);
    width: var(--sizing-8x);
  }

  img:hover {
    animation: ${focusOnHover} 0.5s forwards;
  }
`;

// --------- Card Credits Styles --------- //
export const CardCreditsStyled = styled.div`
  background-color: #0d0d14;
  display: flex;
  flex-direction: column;
  width: 25%;

  h2 {
    color: white;
    margin: var(--sizing-5x);
  }
`;

export const CastAndCrew = styled.div`
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
