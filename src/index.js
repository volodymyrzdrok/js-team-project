import 'animate.css';

import { refs } from './js/refs/refs';

import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';
import { getCocktailsByLetter } from './js/getProducts/getCocktailsByLetter';
import { renderModalCard } from './js/modals/modalInfoCoctail';
import { themeController, themeOn } from './js/theme/theme-controller';

import { getLoginStatus } from './js/authorization/authorization';
import { sendData } from './js/api';

getRandomCocktails();

refs.searchCocktailsInput[0].addEventListener('submit', getCocktailsByName);
refs.searchCocktailsInput[1].addEventListener('submit', getCocktailsByName);
refs.lettersContainer.addEventListener('click', getCocktailsByLetter);

// test
const test = () => {
  const userID = getLoginStatus();
  if (!userID) {
    return;
  }
  sendData({ task: 'text-2' }, `${userID}/test`);
  getData(`${userID}/test`).then(data => {
    console.log(data);
  });
};
refs.testButton.addEventListener('click', test);
refs.productList.addEventListener('click', renderModalCard);
refs.checkboxInput.addEventListener('change', themeController);
themeOn();
