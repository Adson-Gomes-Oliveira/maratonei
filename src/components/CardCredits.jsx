import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MaratoneiContext from '../context/MaratoneiContext';
import {v4 as uuidv4} from 'uuid';
import {
  CardCreditsStyled,
  CastAndCrew,
  PersonStyled,
} from '../styles/index';

function CardCredits() {
  const {castAndCrewData, fetchCastAndCrew} = useContext(MaratoneiContext);
  const {id} = useParams();

  useEffect(() => {
    fetchCastAndCrew(id);
  }, []);

  return (
    <CardCreditsStyled>
      <h2>Quem ta participando?</h2>
      <CastAndCrew>
        {castAndCrewData.map((person) => {
          const {
            name,
            character,
            profile_path: thumbNail,
            known_for_department: department,
          } = person;
          const thumb = `https://image.tmdb.org/t/p/w185/${thumbNail}`;

          return (
            <PersonStyled key={uuidv4()}>
              <img src={thumb} alt={`Ator ${name}`} />
              <div>
                <span>{department}</span>
                <span>{name}</span>
                <span>{character}</span>
              </div>
            </PersonStyled>
          );
        })}
      </CastAndCrew>
    </CardCreditsStyled>
  );
}

export default CardCredits;
