export const FAV_COCKTAILS = 'favorite-cocktails';
export const FAV_INGREDIENTS = 'favorite-ingredients';
export const windowLocation = window.location.pathname;
export const checkIndexFile =
  windowLocation === '/index.html' ||
  windowLocation === '/js-team-project/index.html' ||
  windowLocation === '/' ||
  windowLocation === '/js-team-project/';
export const checkFavCocktailsIndexFile =
  windowLocation === '/partials/favorite-cocktails.html' ||
  windowLocation === '/js-team-project/partials/favorite-cocktails.html';
export const checkFavIngredientsIndexFile =
  windowLocation === '/partials/favorite-ingredients.html' ||
  windowLocation === '/js-team-project/partials/favorite-ingredients.html';
export const DEBOUNCE_DELAY = 200;
