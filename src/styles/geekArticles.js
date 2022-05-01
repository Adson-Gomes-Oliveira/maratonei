import styled from 'styled-components';

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
