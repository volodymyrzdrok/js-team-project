import 'animate.css';
import { refs, refsMenu, refsSign } from './refs/refs';
import { DEBOUNCE_DELAY } from './utils/constans';
import _debounce from 'lodash.debounce';
import {
  getFavorIngredinents,
  getSearchFavIngredientsByName,
} from './getProducts/getFavIngredients';
import { modalIngredientsInFavPage } from './modals/ modalInfoIngredient';
import { themeController, themeOn } from './theme/theme-controller';

import './header-menu/burger.js';
import './header-menu/drop-down-menu.js';
import './header-menu/signup.js';

import { checkUserAuth, authController } from './auth/authController';
import { onLogInAuth, onLogOutAuth } from './auth/authFirebase';

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

refs.checkboxInput[0].addEventListener('change', themeController);
refs.checkboxInput[1].addEventListener('change', themeController);
themeOn();

refsMenu.favorites.addEventListener('click', authController);
refsMenu.favoritesMobile.addEventListener('click', authController);
checkUserAuth();

refsSign.logIn.addEventListener('click', onLogInAuth);
refsSign.logOut.addEventListener('click', onLogOutAuth);
