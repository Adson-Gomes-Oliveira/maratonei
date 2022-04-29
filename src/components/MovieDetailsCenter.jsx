import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import {
  CardHeadlineStyled,
  CardVideoStyled,
  CardRecomendationStyled,
} from '../styles/cardDetails';

function MovieDetailsCenter({detailsData}) {
  const navigate = useNavigate();

  const {
    title,
    tagline,
    overview,
    recomendations,
    trailer_key: trailer,
  } = detailsData;

  const redirectToDetails = (id) => {
    return navigate(`/movies/${id}`);
  };

  return (
    <>
      <CardHeadlineStyled>
        <h2>{title}</h2>
        <span>{tagline}</span>
        <p>{overview}</p>
      </CardHeadlineStyled>

      <CardVideoStyled>
        {trailer ? (
          <>
            <h3>{trailer.name}</h3>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer.key}`}
              width='40rem'
              light
            />
          </>
        ) : (
          <h3>Trailer do filme não disponível</h3>
        )}
      </CardVideoStyled>

      <CardRecomendationStyled>
        <h3>Recomendações Similares</h3>
        <div>
          {recomendations.map((rec) => {
            const {id, poster_path: thumbNail, title} = rec;
            const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

            return (
              <img
                key={title}
                src={thumb}
                alt={title}
                onClick={() => redirectToDetails(id)}
              />
            );
          })}
        </div>
      </CardRecomendationStyled>
    </>
  );
}

MovieDetailsCenter.propTypes = {
  detailsData: PropTypes.object,
};

export default MovieDetailsCenter;
