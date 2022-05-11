import {useEffect, useState} from 'react';

export function useDeleteFavorite() {
  const [showId, setShowId] = useState(0);

  useEffect(() => {
    const recover = JSON.parse(localStorage.getItem('user-register'));
    if (showId > 0 &&
    recover !== null) {
      const favorites = recover[0].accountFavorites;
      const removeShow = favorites.filter((favorite) => favorite.id !== showId);
      const newFavorite = [{
        ...recover[0],
        accountFavorites: removeShow,
      }];
      localStorage.setItem('user-register', JSON.stringify(newFavorite));
    };
  }, [showId]);

  return setShowId;
}

function useFavorite() {
  const [favoriteShow, setFavorite] = useState({});

  useEffect(() => {
    const recover = JSON.parse(localStorage.getItem('user-register'));
    if (Object.keys(favoriteShow).length > 0 &&
    recover !== null) {
      const newFavorite = [{
        ...recover[0],
        accountFavorites: [...recover[0].accountFavorites, favoriteShow],
      }];
      localStorage.setItem('user-register', JSON.stringify(newFavorite));
    };
  }, [favoriteShow]);

  return setFavorite;
}

export default useFavorite;
