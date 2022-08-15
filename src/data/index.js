import TmdbBanner from '../images/tmdb-banner.webp';
import GithubBanner from '../images/github-banner.webp';
import LinkedInBanner from '../images/linkedin-banner.webp';
require('dotenv').config();

export const ZERO = 0;
export const EXCLUDE_LINK_INDEX = 3;
export const EXCLUDE_LINK_INDEX_MOVIES = 1;
export const AMOUNT_OF_MENU_LINKS = 6;
export const AMOUNT_OF_ADS = 6;
export const TMDB_API_KEY = process.env.TMDB_API_TOKEN;

export const ads = [
  {
    copy: 'TMDB | Milhões de Filmes, Séries e Pessoas para Descobrir',
    bgImage: TmdbBanner,
    freeTrial: 'no',
    adLink: 'https://www.themoviedb.org/',
  },
  {
    copy: 'GITHUB | Acesse para ver mais projetos interessantes!',
    bgImage: GithubBanner,
    freeTrial: 'no',
    adLink: 'https://github.com/Adson-Gomes-Oliveira',
  },
  {
    copy: 'LINKEDIN | Vamos nos conectar!',
    bgImage: LinkedInBanner,
    freeTrial: 'no',
    adLink: 'https://www.linkedin.com/in/adson-gomes-oliveira/',
  },
];
