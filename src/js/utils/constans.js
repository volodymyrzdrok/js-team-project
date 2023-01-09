export const FAV_COCKTAILS = 'favorite-cocktails';
export const FAV_INGREDIENTS = 'favorite-ingredients';
export const windowLocation = window.location.pathname;
export const checkIndexFile =
  windowLocation === '/index.html' ||
  windowLocation === '/js-team-project/index.html' ||
  windowLocation === '/' ||
  windowLocation === '/js-team-project/';
export const checkFavCocktailsIndexFile =
  windowLocation === '/partials/fav-cocktails.html' ||
  windowLocation === '/js-team-project/partials/fav-cocktails.html';
export const checkFavIngredientsIndexFile =
  windowLocation === '/partials/fav-ingredients.html' ||
  windowLocation === '/js-team-project/partials/fav-ingredients.html';
export const DEBOUNCE_DELAY = 200;
export const THEME_SWITCHER = 'theme-switcher';

export const THEME_DARK = 'dark';
