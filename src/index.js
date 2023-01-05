import { refs } from './js/refs/refs';
import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';
import { getCocktailsByLetter } from './js/getProducts/getCocktailsByLetter';

// refs.letter.addEventListener('click', getCocktailsByLetter);
// refs.input.addEventListener('submit', debounce(getCocktailsByName,250));

getRandomCocktails();
