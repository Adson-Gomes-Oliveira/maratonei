import styled from 'styled-components';

// --------- General Styles ------------ //
export const MoviesAndSeriesStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionStyled = styled.div`
  display: flex;
`;

export const DisclaimerResults = styled.span`
  align-self: center;
  color: var(--yellow-project-color);
  margin-bottom: var(--sizing-5x);
`;

// --------- Left Section Styles ------------ //
export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--sizing-3x);
  width: 75%;
`;

// --------- Cards Section Styles ------------ //
export const SearchLabel = styled.label`
  align-items: center;
  display: flex;
  height: 2.5rem;
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
  max-height: 2.3rem;
  min-height: 2.3rem;
  padding: 0 var(--sizing-1x);
  width: 90%;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;

  span {
    color: var(--yellow-project-color);
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: var(--sizing-3x);

  span {
    align-self: center;
    color: var(--yellow-project-color);
    font-size: var(--sizing-5x);
  }

  span:nth-child(1) {
    font-family: 'bebas', sans-serif;
    font-size: 1.2rem;
    margin-right: var(--sizing-3x);
  }
`;

export const CardsToShow = styled.div`
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

// --------- Filter Section Styles ------------ //
export const FilterStyled = styled.form`
  align-items: center;
  display: flex;
  margin-left: 1rem;

  label {
    margin-right: 1rem;
  }

  label {
    color: white;
    display: flex;
    flex-direction: column;
    font-family: 'bebas', sans-serif;

    input {
      background: none;
      border: 0.1rem solid var(--yellow-project-color);
      color: white;
      padding: 0.3rem;
    }
  }

  button {
    align-self: flex-end;
    background: none;
    border: none;
    color: var(--yellow-project-color);
    cursor: pointer;
    font-size: var(--sizing-4x);
    font-weight: 700;
  }
`;
