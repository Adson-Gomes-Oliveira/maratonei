import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {CardsStyled, CardStyled, CardTitle} from '../styles';
import {ZERO} from '../data';

export function starsGenerator(amount) {
  const starsNoChecked = ['star_border', 'star_border',
    'star_border', 'star_border', 'star_border'];
  const starsChecked = [];
  if (amount >= ZERO) {
    starsNoChecked.forEach((star, index) => {
      if (index < amount) {
        return starsChecked.push('star');
      }

      starsChecked.push(star);
    });
  }
  return (
    <div>
      {starsChecked.map((star) => (
        <span key={uuidv4()} className="material-icons-outlined">{star}</span>
      ))}
    </div>
  );
}

function MoviesCards({data}) {
  return (
    <CardsStyled>
      {data.map((movie) => {
        const {
          id,
          poster_path: thumbNail,
          vote_average: voteAverage,
          title,
          name,
        } = movie;
        const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;
        const starsNumber = Math.round(voteAverage / 2);
        const ptBrTitle = title || name;
        return (
          <CardStyled key={uuidv4()}>
            <Link to={`/movies/${id}`}>
              <img src={thumb} alt="" />
              <CardTitle>{ptBrTitle}</CardTitle>
              {starsGenerator(starsNumber)}
            </Link>
          </CardStyled>
        );
      })}
    </CardsStyled>
  );
};

MoviesCards.propTypes = {
  data: PropTypes.array,
};

export default MoviesCards;
