export const setFavorite = (hero, favorites) => new Promise((resolve, reject) => {
  if (!hero) { reject(new Error('Error - utils/setFavorite.js')); }

  hero.fav = !hero.fav;
  const payload = favorites.some(obj => obj.id === hero.id)
    ? [...favorites.filter(i => i.id !== hero.id)]
    : [...favorites, hero];

  resolve(payload);
});
