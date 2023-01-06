import { refs } from './js/refs/refs';
import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';

getRandomCocktails();

refs.searchCocktailsInput[0].addEventListener('submit', getCocktailsByName);
refs.searchCocktailsInput[1].addEventListener('submit', getCocktailsByName);
