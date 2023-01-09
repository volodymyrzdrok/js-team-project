import { refs } from './refs/refs';
import { DEBOUNCE_DELAY } from './utils/constans';
import _debounce from 'lodash.debounce';
import {
  getFavorIngredinents,
  getSearchFavIngredientsByName,
} from './getProducts/getFavIngredients';
import { modalIngredientsInFavPage } from './modals/ modalInfoIngredient';

getFavorIngredinents();

refs.ingredList.addEventListener('click', modalIngredientsInFavPage);

refs.inputFavPage[0].addEventListener(
  'input',
  _debounce(getSearchFavIngredientsByName, DEBOUNCE_DELAY)
);
refs.inputFavPage[1].addEventListener(
  'input',
  _debounce(getSearchFavIngredientsByName, DEBOUNCE_DELAY)
);
