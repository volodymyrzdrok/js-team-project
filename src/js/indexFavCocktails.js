import _debounce from 'lodash.debounce';
import {
  getFavCocktails,
  getSearchFavCocktailsByName,
} from './getProducts/getFavCocktails';
import { renderModalCard } from './modals/modalInfoCoctail';

import { refs } from './refs/refs';
import { DEBOUNCE_DELAY } from './utils/constans';

getFavCocktails();

refs.inputFavPage[0].addEventListener(
  'input',
  _debounce(getSearchFavCocktailsByName, DEBOUNCE_DELAY)
);
refs.inputFavPage[1].addEventListener(
  'input',
  _debounce(getSearchFavCocktailsByName, DEBOUNCE_DELAY)
);
refs.productList.addEventListener('click', renderModalCard);
