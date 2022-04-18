import React from 'react';
import {AdStyled} from '../styles';
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {streamingAds} from '../data';

function Advisor() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={5.5}
      totalSlides={streamingAds.length}
      isPlaying
      touchEnabled={false}
      dragEnabled={false}
      interval={10000}
    >a
      <Slider>
        {streamingAds.map((ad, index) => {
          const {copy, bgImage, freeTrial, streamingLink} = ad;
          const message = freeTrial === 'yes' ?
          `*Teste de 30 dias grátis disponível, verifique a disponibilidade` :
          '';
          return (
            <Slide key={`slide-ad-element-${index}`}>
              <a
                href={streamingLink}
                target="_blank"
                rel='noreferrer'
                style={{'textDecoration': 'none'}}
              >
                <AdStyled bgImage={bgImage} data-testid="advisor">
                  <span>{copy}</span>
                  <span>{message}</span>
                </AdStyled>
              </a>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
}

export default Advisor;
