import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import useFavorite, {useDeleteFavorite} from '../../hooks/useFavorite';
import ReactPlayer from 'react-player/youtube';
import {
  MediaHeadlineStyled,
  MediaVideoStyled,
  MediaRecomendationStyled,
} from '../../styles/mediaDetails';

function MediaDetailsCenter({detailsData}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const setFavorite = useFavorite();
  const setShowId = useDeleteFavorite();
  const {id} = useParams();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {
    title,
    tagline,
    overview,
    recomendations,
    trailer_key: trailer,
  } = detailsData;

  useEffect(() => {
    const recoverUserDB = JSON.parse(localStorage.getItem('user-register'));
    if (recoverUserDB !== null) {
      const verifyFavorite = recoverUserDB[0].accountFavorites
          .some((favorite) => favorite.id == id);

      setIsFavorite(false);
      if (verifyFavorite) setIsFavorite(true);
    }
  }, [id]);

  const notFavoriteShow = () => {
    setShowId(detailsData.id);
    return setIsFavorite(false);
  };
  const favoriteShow = () => {
    setFavorite(detailsData);
    return setIsFavorite(true);
  };

  const redirectToDetails = (id) => {
    const redirectPath = pathname.split('/', 2)[1];
    return navigate(`/${redirectPath}/${id}`);
  };

  return (
    <>
      <MediaHeadlineStyled>
        <div>
          <h2>{title}</h2>
          {isFavorite ? (
            <button
              type="button"
              onClick={notFavoriteShow}
            >
              <span className="material-icons-outlined">favorite</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={favoriteShow}
            >
              <span className="material-icons-outlined">favorite_border</span>
            </button>
          )}
        </div>
        <span>{tagline}</span>
        <p>{overview}</p>
      </MediaHeadlineStyled>

      <MediaVideoStyled>
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
          <h3>Trailer não disponível</h3>
        )}
      </MediaVideoStyled>

      <MediaRecomendationStyled>
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
      </MediaRecomendationStyled>
    </>
  );
}

MediaDetailsCenter.propTypes = {
  detailsData: PropTypes.object,
};

export default MediaDetailsCenter;
