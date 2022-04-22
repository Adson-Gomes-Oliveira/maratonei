import React, {useEffect, useContext} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
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
  CardRecomendations,
  CardRevenue,
  CardCompanies,
} from '../styles/cardDetails';
import CardCredits from '../components/CardCredits';
import ReactPlayer from 'react-player/youtube';

function CardDetails() {
  const navigate = useNavigate();

  const {
    fetchDetails,
    moviesAndSeriesDetails,
    setLoading,
    loading,
  } = useContext(MaratoneiContext);

  const {
    genres,
    title,
    tagline,
    budget,
    revenue,
    overview,
    recomendations,
    poster_path: thumbNail,
    vote_average: voteAverage,
    release_date: release,
    trailer_key: trailer,
    production_companies: companies,
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
  const movieConvertCurrency = (number) => {
    return new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
        .format(number);
  };
  const redirectToDetails = (id) => {
    navigate(`/movies/${id}`);
    return fetchDetails(id);
  };

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
                <div>{stars}</div>

                <CardVotes>
                  {`Nota popular: ${voteAverage}/10`}
                </CardVotes>

                <CardRealease>
                  {`Data de lançamento: ${releaseDate}`}
                </CardRealease>

                <CardCategorys>
                  <span>Categorias:</span>
                  {genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </CardCategorys>

                <CardRevenue>
                  <span>Resultados Financeiros</span>
                  <span>
                    <span>Orçamento:</span>
                    {`USD ${movieConvertCurrency(budget)}`}
                  </span>
                  <span>
                    <span>Receita:</span>
                    {`USD ${movieConvertCurrency(revenue)}`}
                  </span>
                </CardRevenue>

                <CardCompanies>
                  {companies.map((comp, index) => {
                    const {logo_path: thumbNail, name} = comp;
                    const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

                    if (index === 0) {
                      return (
                        <>
                          <img key={`${name}`} src={thumb} alt={name} />
                          <span>Outras Produtoras</span>
                        </>
                      );
                    }

                    return (
                      <span key={`${name}`}>{name}</span>
                    );
                  })}
                </CardCompanies>

              </CardPrimaryInfos>

              <CardDescription>

                <CardHeadline>
                  <h2>{title}</h2>
                  <span>{tagline}</span>
                  <p>{overview}</p>
                </CardHeadline>

                <CardVideo>
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
                </CardVideo>

                <CardRecomendations>
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
                </CardRecomendations>

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
