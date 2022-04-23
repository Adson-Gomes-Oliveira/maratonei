import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {MovieReviewStyled, ReviewStyled} from '../styles';
import MaratoneiContext from '../context/MaratoneiContext';

function MovieReviews() {
  const {fetchReviews, reviews} = useContext(MaratoneiContext);
  const {id} = useParams();

  useEffect(() => {
    fetchReviews(id);
  }, []);

  return (
    <MovieReviewStyled>
      {reviews.length > 0 && (
        <>
          <h3>Avaliações dos Usuários</h3>
          <span>As avaliações abaixo retiradas do TMDB</span>
          <ReviewStyled>
            {reviews.map((reviews) => {
              const {
                author,
                url,
                author_details: authorDetails,
                created_at: createdAt,
              } = reviews;

              return (
                <>
                  <div>
                    <span>{author}</span>
                    <span>{`${authorDetails.rating}/10`}</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acessar a Avaliação do Usuário
                    </a>
                  </div>
                  <span>{createdAt}</span>
                </>
              );
            })}
          </ReviewStyled>
        </>
      )}
    </MovieReviewStyled>
  );
}

export default MovieReviews;
