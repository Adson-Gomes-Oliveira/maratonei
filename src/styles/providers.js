import styled from 'styled-components';

export const ProvidersPageStyled = styled.section`
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

export const ProviderImages = styled.div`
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
