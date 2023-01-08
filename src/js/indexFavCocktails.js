import _debounce from 'lodash.debounce';
import { getFavCocktails } from './getProducts/getFavCocktails';
import { renderModalCard } from './modals/modalInfoCoctail';

import { refs } from './refs/refs';
import { DEBOUNCE_DELAY } from './utils/constans';

console.log('працює COCCKKK FAV');

getFavCocktails();
// refs.formSearchInput.addEventListener(
//   'input',
//   _debounce(getSearchFavCoctailssByName, DEBOUNCE_DELAY)
// );

refs.productList.addEventListener('click', renderModalCard);
