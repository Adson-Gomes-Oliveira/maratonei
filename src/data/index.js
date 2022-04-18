import NetflixBanner from '../images/netflix-banner-ad.png';
import PrimeBanner from '../images/prime-banner-ad.png';
import DisneyBanner from '../images/disney-banner-ad.png';
import HBOBanner from '../images/hbo-banner-ad.png';
import ParamountBanner from '../images/paramount-banner-ad.png';
import TmdbBanner from '../images/tmdb-banner-ad.png';
import TelecineBanner from '../images/telecine-banner-ad.png';

export const ZERO = 0;
export const EXCLUDE_LINK_INDEX = 3;
export const EXCLUDE_LINK_INDEX_EXPLORE = 1;
export const AMOUNT_OF_MENU_LINKS = 6;
export const AMOUNT_OF_ADS = 6;
export const TMDB_API_KEY = 'db9c402babc1fd076e9e70dc34460d2a';

export const streamingAds = [
  {
    copy: 'TMDB | Milhões de Filmes, Séries e Pessoas para Descobrir',
    bgImage: TmdbBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.themoviedb.org/',
  },
  {
    copy: 'ASSINE NETFLIX | FILMES, SERIES, E MUITO MAIS, SEM LIMITES',
    bgImage: NetflixBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.netflix.com/',
  },
  {
    copy: 'ASSINE PRIME VIDEO | TESTE 30 DIAS GRÁTIS!',
    bgImage: PrimeBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.primevideo.com/',
  },
  {
    copy: 'ASSINE HBO | O MELHOR DO ENTRETENIMENTO',
    bgImage: HBOBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.hbomax.com/',
  },
  {
    copy: 'ASSINE DISNEY | DESCUBRA UMA NOVA HISTÓRIA TODOS OS DIAS',
    bgImage: DisneyBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.disneyplus.com/',
  },
  {
    copy: 'ASSINE PARAMOUNT | MILHARES DE HORAS DAS MELHORES HISTÓRIAS',
    bgImage: ParamountBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.paramountplus.com/',
  },
  {
    copy: 'ASSINE TELECINE | O MELHOR DO STREAMING TA AQUI',
    bgImage: TelecineBanner,
    freeTrial: 'no',
    streamingLink: 'https://www.telecine.com/',
  },
];
