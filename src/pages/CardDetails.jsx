import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import MaratoneiContext from '../context/MaratoneiContext';
import AlternativeHeader from '../components/AlternativeHeader';
import Advisor from '../components/Advisor';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import {starsGenerator} from '../components/MoviesCards';
import {
  CardDetailStyled,
  CardsLeftSectionStyled,
  CardDescription,
  CardPrimaryInfos,
  CardVotes,
  CardRealease,
  CardCategorys,
  CardHeadline,
  CardVideo,
} from '../styles/cardDetails';
import CardCredits from '../components/CardCredits';

function CardDetails() {
  const {
    fetchDetails,
    moviesAndSeriesDetails,
    setLoading,
    loading,
  } = useContext(MaratoneiContext);
  const {
    genres,
    title,
    overview,
    poster_path: thumbNail,
    tagline,
    vote_average: voteAverage,
    release_date: release,
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
  const releaseDate = release.split('-').reverse().join('-');

  return (
    <>
      <AlternativeHeader />
      <Advisor />
      {loading ? <Loading /> : (
        <>
          <CardDetailStyled>

            <CardsLeftSectionStyled>

              <CardPrimaryInfos>
                <img src={thumb} alt="" />
                <div>
                  {stars}
                </div>
                <CardVotes>{`Nota popular: ${voteAverage}/10`}</CardVotes>
                <CardRealease>
                  {`Data de lançamento: ${releaseDate}`}
                </CardRealease>
                <CardCategorys>
                  <span>Categorias:</span>
                  {genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </CardCategorys>
              </CardPrimaryInfos>

              <CardDescription>
                <CardHeadline>
                  <h2>{title}</h2>
                  <span>{tagline}</span>
                  <p>{overview}</p>
                </CardHeadline>
                <CardVideo>

                </CardVideo>
              </CardDescription>

            </CardsLeftSectionStyled>

            <CardCredits />

          </CardDetailStyled>
          <Footer />
        </>
      )}
    </>
  );
}

export default CardDetails;
