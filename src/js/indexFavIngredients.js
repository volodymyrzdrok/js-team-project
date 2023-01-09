import 'animate.css';
import { refs } from './refs/refs';
import { DEBOUNCE_DELAY } from './utils/constans';
import _debounce from 'lodash.debounce';
import {
  getFavorIngredinents,
  getSearchFavIngredientsByName,
} from './getProducts/getFavIngredients';
import { modalIngredientsInFavPage } from './modals/ modalInfoIngredient';
import { themeController, themeOn } from './theme/theme-controller';

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

refs.checkboxInput.addEventListener('change', themeController);
themeOn();
