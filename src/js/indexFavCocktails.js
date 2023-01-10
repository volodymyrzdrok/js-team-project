import 'animate.css';

import _debounce from 'lodash.debounce';
import {
  getFavCocktails,
  getSearchFavCocktailsByName,
} from './getProducts/getFavCocktails';
import { renderModalCard } from './modals/modalInfoCoctail';

import { refs } from './refs/refs';
import { themeController, themeOn } from './theme/theme-controller';
import { DEBOUNCE_DELAY } from './utils/constans';

import './header-menu/burger.js'
import './header-menu/drop-down-menu.js'
import './header-menu/signup.js'

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

refs.checkboxInput.addEventListener('change', themeController);
themeOn();
