import styled from 'styled-components';

// --------- General Styles ------------ //
export const ExploreStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ExploreContentStyled = styled.div`
  display: flex;
`;

// --------- Left Section Styles ------------ //
export const ShowSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--sizing-3x);
  width: 75%;
`;

// --------- Cards Section Styles ------------ //
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
  visibility: ${(props) => {
    if (props.display === false) {
      return 'hidden';
    }
  }};
  align-items: center;
  display: flex;
  margin-left: var(--sizing-3x);

  label {
    margin-right: 1rem;
  }

  label:nth-child(1) {
    display: flex;
    flex-direction: column;
    color: var(--yellow-project-color);
    font-family: 'bebas', sans-serif;

    input {
      background: none;
      border: 0.1rem solid var(--yellow-project-color);
      color: white;
      padding: 0.2rem;
    }
  }

  label:nth-child(2) {
    display: flex;
    flex-direction: column;
    color: var(--yellow-project-color);
    font-family: 'bebas', sans-serif;

    select {
      background: none;
      border: 0.1rem solid var(--yellow-project-color);
      color: white;
      padding: 0.3rem;

      option {
        background-color: var(--black-light-project-color);
      }
    }
  }
`;
