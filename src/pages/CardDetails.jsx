import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {starsGenerator} from '../components/MoviesCards';
import MovieDetailsLeftSide from '../components/MovieDetailsLeftSide';
import CardCredits from '../components/CardCredits';
import MovieDetailsCenter from '../components/MovieDetailsCenter';
import AlternativeHeader from '../components/AlternativeHeader';
import Advisor from '../components/Advisor';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  CardDetailStyled,
  CardsSectionStyled,
  CardCenterStyled,
  CardPrimaryInfoStyled,
} from '../styles/cardDetails';

function CardDetails() {
  const {
    fetchDetails,
    moviesAndSeriesDetails,
    setLoading,
    loading,
  } = useContext(MaratoneiContext);

  const {
    poster_path: thumbNail,
    vote_average: voteAverage,
  } = moviesAndSeriesDetails;

  const {id} = useParams();

  useEffect(() => {
    fetchDetails(id);

    setLoading(true);
    const showLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(showLoading);
    };
  }, []);

  const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;
  const starsNumber = Math.round(voteAverage / 2);
  const stars = starsGenerator(starsNumber);

  return (
    <>
      <AlternativeHeader />
      <Advisor />
      {loading ? <Loading /> : (
        <>
          <CardDetailStyled>

            <CardsSectionStyled>

              <CardPrimaryInfoStyled>

                <img src={thumb} alt="" />
                <div>{stars}</div>

                <MovieDetailsLeftSide />

              </CardPrimaryInfoStyled>

              <CardCenterStyled>

                <MovieDetailsCenter />

              </CardCenterStyled>

            </CardsSectionStyled>

            <CardCredits />

          </CardDetailStyled>
          <Footer />
        </>
      )}
    </>
  );
}

export default CardDetails;
