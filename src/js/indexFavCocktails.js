import 'animate.css';

import _debounce from 'lodash.debounce';
import {
  getFavCocktails,
  getSearchFavCocktailsByName,
} from './getProducts/getFavCocktails';
import { renderModalCard } from './modals/modalInfoCoctail';

import { refs, refsMenu, refsSign } from './refs/refs';
import { themeController, themeOn } from './theme/theme-controller';
import { DEBOUNCE_DELAY } from './utils/constans';

import './header-menu/burger.js';
import './header-menu/drop-down-menu.js';
import './header-menu/signup.js';
import { checkUserAuth, authController } from './auth/authController';
import { onLogInAuth, onLogOutAuth } from './auth/authFirebase';

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

refs.checkboxInput[0].addEventListener('change', themeController);
refs.checkboxInput[1].addEventListener('change', themeController);
themeOn();
refsMenu.favorites.addEventListener('click', authController);
refsMenu.favoritesMobile.addEventListener('click', authController);
checkUserAuth();

refsSign.logIn.addEventListener('click', onLogInAuth);
refsSign.logOut.addEventListener('click', onLogOutAuth);
