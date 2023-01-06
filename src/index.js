import { refs } from './js/refs/refs';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';
import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getCocktailsByLetter } from './js/getProducts/getCocktailsByLetter';



getRandomCocktails();

refs.formSearch.addEventListener('submit', getCocktailsByName);
refs.lettersList.addEventListener('click', getCocktailsByLetter);
