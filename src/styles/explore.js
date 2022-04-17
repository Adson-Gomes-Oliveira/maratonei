import styled from 'styled-components';

export const ExploreStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ExploreContentStyled = styled.div`
  display: flex;
`;

export const ShowSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--sizing-3x);
  width: 75%;
`;

export const SearchLabel = styled.label`
  display: flex;
  margin: var(--sizing-5x) 0;

  div {
    border-radius: 0.5rem;
    border: 0.15rem solid white;
    display: flex;
    justify-content: space-between;
    width: 40%;

    input::placeholder {
      font-family: 'Bebas', sans-serif;
      font-size: var(--sizing-3x);
      padding: 0 var(--sizing-2x);
    }

    input:focus {
      outline: none;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: var(--black-project-color);
  border-radius: 0.3rem 0 0 0.3rem;
  border: none;
  color: white;
  font-family: 'Arial', sans-serif;
  font-size: var(--sizing-3x);
  height: 2.3rem;
  padding: 0 var(--sizing-1x);
  width: 90%;
`;

export const SearchButton = styled.button`
  background: none;
  border-radius: 0 0.3rem 0.3rem 0;
  border: none;
  color: var(--yellow-project-color);
  cursor: pointer;
  height: 100%;
  width: 10%;
  
  img {
    width: var(--sizing-5x);
  }
`;

export const FilmsToShow = styled.div`
  display: flex;
  flex-direction: column;
  
  h3 {
    color: white;
    font-family: 'bebas', sans-serif;
    font-size: var(--sizing-5x);
    font-weight: 100;
    margin-bottom: var(--sizing-5x);
  }
`;
