import { refs } from './refs/refs';
import { DEBOUNCE_DELAY } from './utils/constans';
import _debounce from 'lodash.debounce';
import { getFavorIngredinents } from './getProducts/getFavIngredients';
import { modalIngredientsInFavPage } from './modals/ modalInfoIngredient';

console.log('працює INGREDDD FAR');
getFavorIngredinents();

refs.ingredList.addEventListener('click', modalIngredientsInFavPage);

// refs.formSearchInput.addEventListener(
//   'input',
//   _debounce(getSearchFavIngredientsByName, DEBOUNCE_DELAY)
// );
