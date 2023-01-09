import { refs } from './js/refs/refs';
import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';
import { getCocktailsByLetter } from './js/getProducts/getCocktailsByLetter';
import { renderModalCard } from './js/modals/modalInfoCoctail';
import { themeController, themeOn } from './js/theme/theme-controller';
import './js/header-menu/burger.js'
import './js/header-menu/drop-down-menu.js'
import  './js/header-menu/signup.js'

getRandomCocktails();

refs.searchCocktailsInput[0].addEventListener('submit', getCocktailsByName);
refs.searchCocktailsInput[1].addEventListener('submit', getCocktailsByName);
refs.lettersContainer.addEventListener('click', getCocktailsByLetter);
refs.productList.addEventListener('click', renderModalCard);
refs.checkboxInput.addEventListener('change', themeController);
themeOn();
