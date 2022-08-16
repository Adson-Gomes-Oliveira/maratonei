import React from 'react';
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import {ads} from '../../data';
import {AdStyled} from '../../styles';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Advertising() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={5.5}
      totalSlides={ads.length}
      isPlaying
      touchEnabled={false}
      dragEnabled={false}
      interval={10000}
    >
      <Slider>
        {ads.map((ad, index) => {
          const {copy, bgImage, freeTrial, adLink} = ad;
          const message = freeTrial === 'yes' ?
          `*Teste de 30 dias grátis disponível, verifique a disponibilidade` :
          '';
          return (
            <Slide key={`slide-ad-element-${index}`}>
              <a
                href={adLink}
                target="_blank"
                rel='noreferrer'
                style={{'textDecoration': 'none'}}
              >
                <AdStyled bgImage={bgImage} data-testid="advertising">
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

export default Advertising;
