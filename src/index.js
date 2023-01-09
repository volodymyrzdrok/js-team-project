import 'animate.css';

import { refs } from './js/refs/refs';

import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';
import { getCocktailsByLetter } from './js/getProducts/getCocktailsByLetter';
import { renderModalCard } from './js/modals/modalInfoCoctail';
import { themeController, themeOn } from './js/theme/theme-controller';

import { test } from './js/authorization/authorization';

getRandomCocktails();

refs.searchCocktailsInput[0].addEventListener('submit', getCocktailsByName);
refs.searchCocktailsInput[1].addEventListener('submit', getCocktailsByName);
refs.lettersContainer.addEventListener('click', getCocktailsByLetter);

// test
refs.testButton.addEventListener('click', test);

refs.productList.addEventListener('click', renderModalCard);
refs.checkboxInput.addEventListener('change', themeController);
themeOn();
