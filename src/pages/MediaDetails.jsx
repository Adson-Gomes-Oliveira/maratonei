import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import MediaDetailsLeft from '../components/MediaDetailsLeft';
import MediaDetailsCenter from '../components/MediaDetailsCenter';
import CastAndCrew from '../components/CastAndCrew';
import MediaReviews from '../components/MediaReviews';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import Footer from '../components/Footer';
import {useDetailsAPI} from '../hooks/useRequestAPI';
import {
  MediaDetailStyled,
  MediaSectionStyled,
  MediaCenterStyled,
  MediaPrimaryInfoStyled,
} from '../styles/mediaDetails';

function MediaDetails() {
  const {id} = useParams();
  const {pathname} = useLocation();
  const [result, setShowId] = useDetailsAPI(pathname);

  useEffect(() => {
    setShowId(id);
  }, [id]);

  return (
    <>
      <AlternativeHeader />
      <Advertising />
      <MediaDetailStyled>

        <MediaSectionStyled>

          <MediaPrimaryInfoStyled>

            <MediaDetailsLeft detailsData={result}/>

          </MediaPrimaryInfoStyled>

          <MediaCenterStyled>

            <MediaDetailsCenter detailsData={result} />
            <MediaReviews detailsData={result} />

          </MediaCenterStyled>

        </MediaSectionStyled>

        <CastAndCrew detailsData={result} />

      </MediaDetailStyled>
      <Footer />
    </>
  );
}

export default MediaDetails;
